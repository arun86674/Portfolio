// Types
export interface Project {
  id: string;
  title: string;
  period?: string;
  description: string;
  problem: string;
  technologies: string[];
  points?: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  project: string;
  duration: string;
  responsibilities: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  type: 'award' | 'membership' | 'certification';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badge?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  isCollege: boolean;
}

// Data
export const personalInfo = {
  name: 'Arun K',
  location: 'Coimbatore, Tamil Nadu, India',
  degree: 'B.E. Computer Science and Engineering',
  college: 'Karpagam College of Engineering',
  academicPeriod: '2024–2028',
  cgpa: '8.4',
  careerObjective: 'Aspiring Software Engineer',
  email: 'arunkannanak2007@gmail.com',
  phone: '+91 8667424501',
  phoneRaw: '+918667424501',
  resumeUrl: './resume.pdf',
  photoUrl: './arun.jpg',
  avatarUrl: './arun-avatar.jpg',
  status: 'Open to Software Engineering Opportunities',
};

export const socialLinks = {
  github: 'https://github.com/arun86674',
  linkedin: 'https://www.linkedin.com/in/arun-k-aa725b382/',
  leetcode: 'https://leetcode.com/u/Arun1367/',
};

export const heroContent = {
  greeting: "HELLO, I'M",
  name: 'Arun K',
  headline: 'Building Solutions Through Code.',
  description:
    'Computer Science Engineering student passionate about software development, backend engineering, and problem-solving. Experienced in Java, Spring Boot, REST APIs, and full-stack development, with a solid foundation in Data Structures and Algorithms.',
  cta1: 'Explore My Work',
  cta2: 'Download Resume',
};

export const aboutContent = {
  heading: 'A Little About Me',
  paragraphs: [
    'I am a Computer Science undergraduate at Karpagam College of Engineering with strong foundations in data structures, algorithms, object-oriented programming, and practical problem solving.',
    'I have hands-on experience in Java and backend development with Spring Boot, REST APIs, Servlets, JSP, and Hibernate, along with additional experience in C++ and Python. I enjoy building reliable software solutions and scalable backend and full-stack applications.',
    'I believe in learning by building, experimenting with emerging technologies, and continuously refining my engineering capabilities to solve real-world problems.',
  ],
  philosophy: 'Think logically. Build intelligently. Improve continuously.',
  highlights: [
    { label: 'Degree', value: 'B.E. CSE' },
    { label: 'CGPA', value: '8.4' },
    { label: 'Batch', value: '2024–2028' },
    { label: 'Location', value: 'Coimbatore, India' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['C++', 'Java', 'Python', 'SQL', 'JavaScript'],
  },
  {
    name: 'Data Structures & Algorithms',
    skills: [
      'Arrays & Strings',
      'Linked Lists',
      'Stacks & Queues',
      'Trees & Graphs',
      'Dynamic Programming',
      'Binary Search',
      'Backtracking',
    ],
  },
  {
    name: 'Web & Backend',
    skills: [
      'Spring Boot',
      'REST APIs',
      'React',
      'Tailwind CSS',
      'Hibernate',
      'Servlets',
      'JSP',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Databases',
    skills: ['Oracle SQL', 'PostgreSQL'],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Swagger/OpenAPI',
      'Maven',
      'VS Code',
      'Eclipse',
      'Oracle SQL Developer',
    ],
  },
  {
    name: 'Core Computer Science',
    skills: [
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Computer Architecture',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'ezyconnect',
    title: 'EzyConnect',
    period: '2026 – Present',
    description:
      'A full-stack local job-matching platform connecting job seekers with small businesses such as shops, restaurants, bakeries, and workshops within their preferred geographical radius.',
    problem:
      'Bridging the employment gap between local neighborhood job seekers and small business owners across language barriers.',
    technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
    points: [
      'Developing a full-stack local job-matching platform connecting job seekers with small businesses such as shops, restaurants, bakeries, and workshops.',
      'Building a mobile-first React and Tailwind CSS frontend with Spring Boot backend and REST APIs for user, employer, job, and application workflows.',
      'Designing PostgreSQL database structures and backend services for authentication, role-based workflows, job posting, applications, notifications, and reporting.',
    ],
    githubUrl: 'https://github.com/arun86674',
    featured: true,
  },
  {
    id: 'virtual-mouse',
    title: 'Virtual Mouse',
    period: 'Jun 2025 – Jul 2025',
    description:
      'A computer vision-based virtual mouse application enabling complete mouse operations and cursor navigation without physical contact through real-time hand gesture recognition.',
    problem:
      'Enabling touch-free human-computer interaction using accessible hardware and computer vision techniques.',
    technologies: ['Python', 'OpenCV'],
    points: [
      'Developed a computer vision-based virtual mouse system enabling mouse operations without physical contact.',
      'Implemented real-time hand gesture recognition to control cursor movement and perform mouse actions.',
      'Applied computer vision techniques to develop a touch-free human-computer interaction system.',
      'Awarded 1st Place in Project Presentation at Yuva Tech Fest 2025.',
    ],
    githubUrl: 'https://github.com/arun86674',
    featured: true,
  },
  {
    id: 'ai-grievance',
    title: 'AI Grievance Redressal Platform',
    period: 'Certified Internship',
    description:
      'A comprehensive full-stack grievance redressal platform developed as part of a certified internship, covering end-to-end frontend interfaces, robust backend services, and database integration.',
    problem:
      'Automating and streamlining the grievance submission, routing, tracking, and resolution lifecycle.',
    technologies: ['React', 'Spring Boot', 'Oracle SQL', 'REST APIs'],
    points: [
      'Contributed to an AI Grievance Redressal Platform as part of a team-based full-stack project.',
      'Worked across frontend and backend development using React, Spring Boot, and Oracle SQL.',
      'Developed application functionality using REST-based communication and contributed to technical documentation and team collaboration.',
    ],
    githubUrl: 'https://github.com/arun86674',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 'internship-1',
    role: 'AI-Integrated Full Stack Development Intern',
    company: 'Karpagam College of Engineering – Certified Internship',
    project: 'AI Grievance Redressal Platform',
    duration: '2 Months',
    responsibilities: [
      'Contributed to an AI Grievance Redressal Platform as part of a team-based full-stack project.',
      'Worked across frontend and backend development using React, Spring Boot, and Oracle SQL.',
      'Developed application functionality using REST-based communication and contributed to technical documentation and team collaboration.',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'yuva-tech',
    title: 'Yuva Tech Fest 2025',
    description: 'Secured 1st Place in Project Presentation for Virtual Mouse.',
    year: '2025',
    type: 'award',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Club',
    description: 'Member – Karpagam College of Engineering. Participate in technical workshops, cloud learning sessions, and collaborative activities.',
    year: '2026 – Present',
    type: 'membership',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'NPTEL – IoT (Internet of Things)',
    issuer: 'NPTEL',
    badge: 'IoT',
  },
  {
    id: 'cert-2',
    title: 'NPTEL – Soft Skill Development',
    issuer: 'NPTEL',
    badge: 'Professional Skills',
  },
  {
    id: 'cert-3',
    title: 'MongoDB – MongoDB Basics for Students',
    issuer: 'MongoDB University',
    badge: 'Database',
  },
  {
    id: 'cert-4',
    title: 'Springboard – C Programming Course',
    issuer: 'Springboard',
    badge: 'Programming',
  },
  {
    id: 'cert-5',
    title: 'Springboard – Project on Microsoft Word',
    issuer: 'Springboard',
    badge: 'Productivity',
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'college',
    institution: 'Karpagam College of Engineering',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    period: '2024 – 2028',
    grade: 'CGPA: 8.4',
    location: 'Coimbatore, Tamil Nadu, India',
    isCollege: true,
  },
  {
    id: 'school',
    institution: 'St. Thomas Higher Secondary School',
    degree: 'Higher Secondary – State Board',
    period: '2024',
    grade: 'Score: 83%',
    location: 'Tamil Nadu, India',
    isCollege: false,
  },
];

// Single object backwards-compatibility
export const education = educationList[0];

export const codingJourney = {
  heading: 'Problem-Solving Journey',
  description:
    'I am deeply passionate about Data Structures and Algorithms. I routinely solve algorithmic problems to strengthen core computational thinking, master time & space complexities, and build strong fundamentals across Arrays, Trees, Graphs, and Dynamic Programming.',
  profiles: [
    { name: 'LeetCode', url: 'https://leetcode.com/u/Arun1367/', icon: 'leetcode' },
    { name: 'GitHub', url: 'https://github.com/arun86674', icon: 'github' },
  ],
};

export const contactContent = {
  heading: "Let's Build Something Together.",
  description:
    'I am always open to exploring software engineering opportunities, internships, and collaborative development projects. Feel free to reach out directly!',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const areasOfInterest = [
  'Software Development',
  'Backend Development',
  'Artificial Intelligence and Machine Learning',
  'Data Structures and Algorithms',
];
