// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Siddharth Dubey',
  role: 'DevOps & Cloud Engineer',
  location: 'Delhi, India',
  email: 'dubeysiddharth368@gmail.com',
  linkedin: 'https://linkedin.com/in/siddharthdubey52',
  github: 'https://github.com/siddharthdubey52',
  // Put a PDF in portfolio/public/ and set e.g. './Siddharth-Dubey-Resume.pdf'
  // to show a resume download button in the hero.
  resumeUrl: '',
};

export const pipelineStages = [
  { name: 'Commit', tools: 'Git · GitHub' },
  { name: 'Build', tools: 'Jenkins · Maven' },
  { name: 'Verify', tools: 'SonarQube · Nexus' },
  { name: 'Containerize', tools: 'Docker' },
  { name: 'Orchestrate', tools: 'Kubernetes' },
  { name: 'Deploy', tools: 'AWS · Terraform' },
  { name: 'Monitor', tools: 'Prometheus · Grafana' },
];

export const highlights = [
  { value: '8.29', label: 'CGPA, B.Tech in Computer Science' },
  { value: '100+', label: 'users supported by a WebRTC calling feature' },
  { value: '2', label: 'corporate teams trained: Capgemini and TestYantra' },
  { value: '2', label: 'universities taught: LPU and Chandigarh University' },
];

export const skillGroups = [
  {
    name: 'Cloud (AWS)',
    skills: [
      'EC2', 'S3', 'IAM', 'VPC', 'Lambda', 'RDS', 'Route 53', 'CloudWatch', 'SNS',
      'AWS CLI', 'Elastic Disaster Recovery (DRS)', 'Database Migration Service (DMS)',
    ],
  },
  {
    name: 'CI/CD & Build',
    skills: ['Jenkins', 'Maven', 'SonarQube', 'Nexus', 'Git', 'GitHub', 'Apache Tomcat'],
  },
  {
    name: 'Containers & IaC',
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Terraform', 'Ansible'],
  },
  { name: 'Monitoring', skills: ['Prometheus', 'Grafana'] },
  { name: 'OS & Scripting', skills: ['Linux', 'Bash/Shell scripting'] },
  {
    name: 'Development',
    skills: [
      'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MySQL',
      'MongoDB', 'WebRTC', 'Socket.IO', 'C', 'C++',
    ],
  },
];

const TY = 'TestYantra';
const NS = 'Nerasoft Finserv';
const BX = 'byteXL';
const TMS = 'Training Management System';

// Skill → where the resume shows it in use.
export const skillEvidence = {
  Jenkins: [
    [TY, 'Built and automated CI/CD pipelines triggered by GitHub Webhooks and Poll SCM.'],
    [TMS, 'Automated build and production deployment on AWS.'],
  ],
  Docker: [
    [TY, 'Containerized applications for consistent environments across development and production.'],
    [TMS, 'Containerized a full-stack role-based dashboard.'],
  ],
  Kubernetes: [[TY, 'Orchestrated containers for high availability.']],
  EC2: [[TY, 'Deployed containerized applications on AWS EC2.']],
  Maven: [[TY, 'Automated builds and deployments.']],
  'Bash/Shell scripting': [[TY, 'Automated builds and deployments with Shell scripting.']],
  GitHub: [[TY, 'Used GitHub Webhooks to trigger Jenkins pipelines.']],
  TypeScript: [[NS, 'Built components for a business accounting web application.']],
  'React.js': [
    [NS, 'Built components integrated with REST APIs.'],
    [TMS, 'Built the dashboard and improved load time with lazy loading and code splitting.'],
    [BX, 'Teach MERN full-stack development at Chandigarh University.'],
  ],
  'Node.js': [
    [TMS, 'Powers the backend of the role-based Admin & Trainer dashboard.'],
    [BX, 'Teach MERN full-stack development at Chandigarh University.'],
  ],
  'Express.js': [[BX, 'Teach MERN full-stack development at Chandigarh University.']],
  MongoDB: [[BX, 'Teach MERN full-stack development at Chandigarh University.']],
  WebRTC: [[NS, 'Developed real-time video and audio calling supporting 100+ users.']],
  'Socket.IO': [[NS, 'Powers real-time video and audio calling supporting 100+ users.']],
};

export const experience = [
  {
    role: 'Technical Trainer, Cloud & Full-Stack',
    company: 'byteXL TechEd Pvt. Ltd.',
    period: 'Dec 2025 – Present',
    current: true,
    points: [
      'Deliver Cloud Security training at Lovely Professional University under the Microsoft GenAI Program.',
      'Train Chandigarh University students in MERN full-stack development, including deploying applications to the cloud.',
    ],
    tags: ['Cloud Security', 'MERN', 'Cloud Deployment'],
  },
  {
    role: 'Associate Software Engineer (DevOps)',
    company: 'TestYantra Pvt. Ltd.',
    period: 'Jul 2025 – Nov 2025',
    points: [
      'Built and automated CI/CD pipelines using Jenkins, triggered by GitHub Webhooks and Poll SCM, reducing manual build and release steps.',
      'Containerized applications with Docker and deployed them on AWS EC2 for consistent environments across development and production.',
      'Automated builds and deployments with Maven and Shell scripting; orchestrated containers on Kubernetes for high availability.',
      'Delivered DevOps & Cloud training to corporate professionals at Capgemini and TestYantra while working in Agile teams.',
    ],
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'Maven', 'Kubernetes'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Nerasoft Finserv Pvt. Ltd.',
    period: 'Mar 2025 – Jun 2025',
    points: [
      'Built React and TypeScript components integrated with REST APIs for a business accounting web application.',
      'Developed a real-time video and audio calling feature with WebRTC and Socket.IO, supporting 100+ users.',
    ],
    tags: ['React', 'TypeScript', 'WebRTC', 'Socket.IO'],
  },
];

export const project = {
  title: 'CI/CD Deployment of a Training Management System',
  stack: ['Docker', 'Jenkins', 'AWS', 'React', 'Node.js', 'JWT'],
  flow: ['Source', 'Jenkins', 'Docker', 'AWS'],
  points: [
    'Containerized a full-stack role-based Admin & Trainer dashboard with Docker.',
    'Automated build and production deployment on AWS with a Jenkins CI/CD pipeline.',
    'Implemented CRUD for trainers, batches and topics; improved load time with lazy loading and code splitting.',
  ],
  link: 'https://github.com/siddharthdubey52',
};

export const education = [
  {
    school: 'Greater Noida Institute of Technology (GNIT-IPU)',
    detail: 'Bachelor of Technology in Computer Science · CGPA 8.29',
    period: '2021 – 2025',
    place: 'Greater Noida, India',
  },
  {
    school: "Dr. Rajendra Prasad Kendriya Vidyalaya, President's Estate",
    detail: 'Class 12 · CBSE',
    period: '2019 – 2020',
    place: 'Delhi, India',
  },
];
