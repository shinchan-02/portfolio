import { Experience, Project, Service, SkillCategory } from './types';
import { 
  Cloud, 
  Server, 
  Shield, 
  Terminal, 
  ChartBar, 
  Zap,
  Database,
  Repeat
} from 'lucide-react';

export const CONTACT_INFO = {
  name: "Satyam Agrawal",
  role: "Sr. SRE / DevOps Engineer",
  email: "agarwalsatyam027@gmail.com",
  phone: "+918058083031",
  linkedin: "https://linkedin.com/in/satyam-a-a36b3217b",
  medium: "https://medium.com/@stym_A",
  location: "New Delhi, India"
};

export const SERVICES: Service[] = [
  {
    id: 'cloud-arch',
    title: 'Cloud Architecture',
    description: 'Migrating legacy monolithic apps to microservices on AWS/GCP Kubernetes clusters. Designing resilient, scalable infrastructure.',
    icon: Cloud
  },
  {
    id: 'cost-opt',
    title: 'Cost Optimization',
    description: 'Reducing cloud bills by implementing Spot Instances, right-sizing resources, and automated cleanup scripts. Proven track record of huge savings.',
    icon: ChartBar
  },
  {
    id: 'cicd',
    title: 'CI/CD Automation',
    description: 'Building "Click-to-Deploy" pipelines using Jenkins, GitLab CI, and GitHub Actions. Integrating automated testing and security scans.',
    icon: Repeat
  },
  {
    id: 'observability',
    title: 'Observability',
    description: 'Setting up full-stack observability with Prometheus, Grafana, ELK, and OpenSearch to ensure 99.99% system reliability.',
    icon: Terminal
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'fleetx',
    company: 'Fleetx Technologies',
    role: 'Sr. SRE/DevOps Engineer',
    period: '05/2024 - Present',
    location: 'Gurugram, Haryana',
    achievements: [
      'Migrated self-hosted applications from EC2 to Kubernetes using Helm.',
      'Managed CI/CD pipelines using Ansible and Jenkins with integrated Playwright automation.',
      'Integrated OpenSearch with Fluentd and Fluent Bit for centralized logging.',
      'Resolved critical application-level issues (5xx errors) through proactive Prometheus monitoring.',
      'Strengthened security with Snort, Wazuh, and Teleport.'
    ]
  },
  {
    id: 'ontic',
    company: 'ONTIC TECHNOLOGIES',
    role: 'DevOps Engineer',
    period: '09/2023 - 04/2024',
    location: 'Noida, Uttar Pradesh',
    achievements: [
      'Deployed self-hosted Kubernetes (K8s) clusters on GCP.',
      'Migrated services from VMs to K8s improving scalability.',
      'Designed Helm and Jenkins pipelines streamlining workflows.',
      'Diagnosed infrastructure bottlenecks and enforced security best practices.'
    ]
  },
  {
    id: 'nykaa',
    company: 'Nykaa (FSN E-Commerce)',
    role: 'DevOps Engineer',
    period: '09/2021 - 09/2023',
    location: 'Gurugram, Haryana',
    achievements: [
      'Led automation initiatives using Shell and Python to reduce operational costs.',
      'Initiated EKS adoption and managed AWS services (IAM, EC2, Redshift, Route53).',
      'Optimized ECS costs using Spot instances and Lambda automation.',
      'Customized Kong API Gateway behavior using Lua scripts.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Cloud & Infra",
    skills: ["AWS", "GCP", "Terraform", "CloudFormation", "Docker", "Kubernetes", "ECS"]
  },
  {
    name: "CI/CD & Automation",
    skills: ["Jenkins", "GitLab CI", "CircleCI", "Helm", "Ansible", "Rundeck", "Lambda"]
  },
  {
    name: "Observability",
    skills: ["Prometheus", "Grafana", "Loki", "ELK Stack", "OpenSearch", "Fluentd"]
  },
  {
    name: "Security & Net",
    skills: ["Wazuh", "Snort", "Teleport", "Pritunl VPN", "Vault", "Nginx/Kong"]
  },
  {
    name: "Languages",
    skills: ["Bash", "Python", "Lua", "PowerShell", "SQL"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'auto-scaling',
    title: 'Resilient EKS Architecture',
    description: 'Designed a self-healing EKS cluster for high-traffic e-commerce loads using Spot instances and cluster autoscaler, reducing costs by 40%.',
    tags: ['AWS', 'EKS', 'Terraform', 'Cost Opt'],
    icon: Server
  },
  {
    id: 'security-mesh',
    title: 'Zero-Trust Security Mesh',
    description: 'Implemented Teleport for ssh access and Pritunl VPN for internal networks, coupled with Wazuh for threat detection.',
    tags: ['Security', 'Teleport', 'Wazuh'],
    icon: Shield
  },
  {
    id: 'automation-bot',
    title: 'Infra Auto-Remediation',
    description: 'Developed AWS Lambda functions triggered by CloudWatch alarms to auto-fix common resource misconfigurations without human intervention.',
    tags: ['Python', 'Lambda', 'Automation'],
    icon: Zap
  },
  {
    id: 'log-platform',
    title: 'Centralized Logging Platform',
    description: 'Built a robust logging pipeline using Fluent Bit, Kafka, and OpenSearch to handle TBs of daily logs with sub-second search latency.',
    tags: ['OpenSearch', 'Data', 'Observability'],
    icon: Database
  }
];
