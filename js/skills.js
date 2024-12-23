document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".resume-section-contents");
  const skillsHeader = document.createElement("h2");
  skillsHeader.className = "mb-5";
  skillsHeader.textContent = "PRIMARY SKILLS";
  container.appendChild(skillsHeader);

  Object.keys(skills).forEach((category) => {
    const categoryHeader = document.createElement("h3");
    categoryHeader.textContent = category;
    container.appendChild(categoryHeader);

    const categoryContent = document.createElement("span");

    Object.keys(skills[category]).forEach((subcategory) => {
      const subheading = document.createElement("div");
      subheading.className = "subheading mb-3";
      subheading.textContent = subcategory;
      categoryContent.appendChild(subheading);

      const list = document.createElement("ul");
      list.className = "list-inline";

      skills[category][subcategory].forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.className = "list";
        listItem.innerHTML = `<b>${skill.split(":")[0]}:</b> ${
          skill.split(":")[1]
        }`;
        list.appendChild(listItem);
      });

      categoryContent.appendChild(list);
    });

    container.appendChild(categoryContent);
  });
});
const skills = {
  "Cloud Platforms": {
    "Amazon Web Services (AWS)": [
      "Identity and Access Management (IAM): Implementing secure access control and user management across AWS services",
      "Elastic Compute Cloud (EC2): Deploying and managing scalable virtual servers in the cloud",
      "Virtual Private Cloud (VPC): Designing and configuring isolated cloud networks with custom IP ranges",
      "Simple Storage Service (S3): Managing scalable object storage with versioning and lifecycle policies",
      "CloudFront Content Delivery Network: Implementing global content delivery with low latency distribution",
      "Network Address Translation (NAT): Setting up secure outbound internet connectivity for private resources",
      "Elastic IP Management: Configuring static public IP addresses for cloud resources",
      "Route 53 DNS Service: Managing domain routing and DNS configuration for high availability",
    ],
    "Microsoft Azure": [
      "Azure Resource Manager (ARM): Orchestrating cloud infrastructure deployment and management",
      "Role-Based Access Control (RBAC): Implementing fine-grained access management across Azure resources",
      "Virtual Networks and Connectivity: Designing secure network architectures with proper segmentation",
      "Content Delivery Network (CDN): Optimizing content delivery with global edge locations",
      "Virtual Machine Management: Deploying and maintaining scalable compute resources",
      "Custom Image Creation: Building and maintaining standardized VM images for deployment",
      "Load Balancer Configuration: Implementing high availability and traffic distribution",
      "NAT Gateway Implementation: Managing outbound internet connectivity for private resources",
    ],
  },
  "DevOps & Container Technologies": {
    Docker: [
      "Container Deployment and Orchestration: Creating and managing containerized applications for consistent deployment",
      "YAML Configuration Management: Writing and maintaining Docker Compose files for multi-container applications",
      "Custom Image Creation: Building optimized container images with multi-stage builds",
      "Local Full-Stack Application Deployment: Setting up development environments with containerized services",
    ],
    Kubernetes: [
      "Container Runtime Interface (CRI): Managing container runtime implementations and configurations",
      "Container Network Interface (CNI): Implementing networking solutions for container communication",
      "Cluster Creation and Management: Setting up and maintaining production-grade Kubernetes clusters",
      "Application Deployment: Orchestrating containerized applications across clusters",
      "YAML Template Development: Creating declarative configurations for Kubernetes resources",
      "Control Plane Administration: Managing core Kubernetes components and services",
      "Kubelet Configuration: Optimizing node-level container management",
    ],
  },
  "Automation Tools": {
    Ansible: [
      "Tower/AWX Platform Management: Operating centralized automation platform for enterprise deployment",
      "Inventory Configuration: Managing dynamic and static infrastructure inventories",
      "Playbook Development: Creating reusable automation workflows for infrastructure management",
      "Role-Based Automation: Developing modular and reusable automation components",
      "Node Management: Maintaining configuration state across managed nodes",
    ],
    Chef: [
      "Workstation Setup and Configuration: Setting up development environments for infrastructure automation",
      "Cookbook Development: Creating reusable configuration management code",
      "Role-Based Infrastructure Management: Implementing scalable configuration patterns",
    ],
  },
  "CI/CD & Version Control": {
    Jenkins: [
      "Pipeline Automation: Creating automated build and deployment workflows",
      "Groovy Scripting: Developing custom pipeline logic and shared libraries",
      "Blue Ocean Interface: Managing modern CI/CD visualization and interaction",
    ],
    "Git & GitHub": [
      "Repository Management: Maintaining code version control and collaboration",
      "Workflow Optimization: Implementing efficient branching and merging strategies",
      "GitHub Actions Automation: Creating automated workflows for code integration and deployment",
      "GitHub Pages Deployment: Managing static website hosting and documentation",
    ],
  },
  "Infrastructure as Code": {
    Terraform: [
      "Infrastructure Automation: Implementing declarative infrastructure provisioning",
      "HashiCorp Configuration Language (HCL): Writing maintainable infrastructure code",
    ],
    "Platform Building": [
      "Vagrant VM Automation: Creating reproducible development environments",
      "Docker OCI Image Creation: Building standardized container images",
      "Packer Image Building for AWS and Azure: Automating cross-platform image creation",
    ],
  },
  "Database Technologies": {
    Databases: [
      "SQL: Designing and optimizing complex database queries and schemas",
      "Redis: Implementing high-performance caching and real-time data structures",
      "MongoDB: Managing scalable NoSQL document databases",
    ],
  },
  "Operating Systems": {
    Linux: [
      "SSH Configuration and Management: Implementing secure remote access and key management",
      "Partition Administration: Managing disk partitions and storage allocation",
      "User and Group Management: Administering system access and permissions",
    ],
    Windows: [
      "Proficiency: Using Windows systems for development, configuring environments, and related tasks",
    ],
  },
  "Development Stack": {
    "Programming Languages": [
      "Python: Developing automation scripts and backend services",
      "JavaScript: Creating interactive web applications and frontend functionality",
    ],
    "Frontend Frameworks": [
      "Angular: Building single-page applications with component-based architecture",
      "Bootstrap: Implementing responsive web design with mobile-first approach",
      "PrimeNG: Creating rich UI components for Angular applications",
    ],
    "Web Technologies": [
      "HTML5: Developing modern web applications with semantic markup",
      "CSS3: Styling web applications with advanced selectors and animations",
      "SCSS: Writing maintainable stylesheets with preprocessor features",
      "JSON: Managing data interchange and configuration formats",
    ],
  },
};

const projects = [
  {
    title: "Running Ollama Locally Without Internet",
    description:
      "Designed a comprehensive guide for setting up and running the Ollama AI model offline using Docker. Streamlined deployment for developers in network-restricted environments, ensuring seamless access to AI capabilities without internet dependency. Optimized workflows for faster experimentation and model testing.",
    link: "LinkedIn Article",
    linkURL: "https://lnkd.in/gqMx6KGN", // Specify type of link for better UX
  },
  {
    title: "Prometheus Setup with Docker",
    description:
      "Configured Prometheus monitoring on Ubuntu Linux 18.04 with Docker, enabling efficient metrics collection and visualization for system performance.",
    link: "GitHub: prometheus-docker-setup",
    linkURL: "https://github.com/Eliyaser/prometheus-docker-setup",
  },
  {
    title: "Optimizing Amazon Linux 2 Base Image",
    description:
      "Contributed to an open-source initiative to optimize Amazon Linux 2 OCI base images, reducing image size by 50% for faster deployments and resource savings.",
    link: "GitHub: Amazon Linux2 Optimization",
    linkURL:
      "https://github.com/sloopstash/kickstart-docker/tree/master/image/base/1.2.1",
  },
  {
    title: "Jenkins Pipeline for OCI Image Deployment",
    description:
      "Developed a robust oci.jenkinsfile to automate Docker image creation and deployment through Jenkins, streamlining CI/CD pipelines for OCI environments.",
    link: "GitHub: oci.jenkinsfile",
    linkURL:
      "https://github.com/sloopstash/kickstart-jenkins/blob/master/pipeline/oci.jenkinsfile",
  },
  {
    title: "Automating Redis Database Management",
    description:
      "Created Python scripts to automate Redis database lifecycle management, including start, stop, and monitoring operations, ensuring seamless database handling.",
    link: "GitHub: redis_auto_script.py",
    linkURL:
      "https://github.com/Eliyaser/my-scripts-works/blob/main/redis_auto_script.py",
  },
  {
    title: "Full-Stack Song Book App | Angular 18, Flask, MongoDB",
    description:
      "Developed a responsive web application for song management, featuring lyrics display and projection capabilities. Built with Angular 18 for the frontend, Flask APIs for backend logic, and MongoDB for efficient data storage. Delivered an intuitive user experience for organizing, viewing, and projecting song lyrics seamlessly.",
    link: "Link: mptcsongbook",
    linkURL: "https://mptcsongbook.netlify.app/#/",
  },
];

const container = document.querySelector(".project-cards");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.classList.add("mb-3");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p class='mb-0 pb-0'>${project.description}</p>
    <a href="${project.linkURL}" target="_blank">${project.link}</a>
  `;
  container.appendChild(card);
});
