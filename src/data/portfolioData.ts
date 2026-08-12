export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  bio: string[];
  availabilityStatus: string;
  university: string;
  degree: string;
  cgpa: string;
  expectedGraduation: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack Web' | 'Android & Security' | 'Mobile & Cloud';
  period: string;
  description: string;
  technologies: string[];
  architectureHighlights: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    context: 'Core Coursework' | 'Project Experience' | 'Active Practice';
  }[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period?: string;
  description: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  score: string;
}

export interface EducationInfo {
  current: EducationEntry;
  prior: EducationEntry[];
  coursework: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
}

export const portfolioData: {
  personalInfo: PersonalInfo;
  projects: Project[];
  skillCategories: SkillCategory[];
  leadership: LeadershipItem[];
  education: EducationInfo;
  achievements: AchievementItem[];
} = {
  personalInfo: {
    name: "Jayam Shanmukha Shivanvitha",
    shortName: "Shivanvitha",
    title: "Computer Science & Engineering Student",
    tagline: "B.E. Computer Science & Engineering student at BMS College of Engineering, Bengaluru. CGPA: 9.9 / 10.",
    bio: [
      "I am a Computer Science & Engineering undergraduate at BMS College of Engineering, Bengaluru, maintaining a CGPA of 9.9 / 10 (till IV Semester).",
      "My technical work spans full-stack web systems (Next.js, React, PostgreSQL, Supabase), mobile applications (Flutter, Firebase), and security tools (Android, Django, Python AST analysis).",
      "I am actively involved in technical communities as an Organizing Committee member for IEEE Computer Society BMSCE and a member of Pentagram (Mathematical Society of BMSCE)."
    ],
    availabilityStatus: "Seeking Summer / Fall 2026 Software Engineering & Technology Internships",
    university: "BMS College of Engineering, Bengaluru",
    degree: "B.E. in Computer Science & Engineering",
    cgpa: "9.9 / 10 (Till IV Semester)",
    expectedGraduation: "2028",
    location: "Bengaluru, Karnataka",
    email: "jayamshanmukha.cs24@bmsce.ac.in",
    phone: "+91-6304177463",
    githubUrl: "https://github.com/shivanvithajayam",
    linkedinUrl: "https://linkedin.com/in/shivanvithajayam",
    resumeUrl: "#"
  },

  projects: [
    {
      id: "bloodline-system",
      title: "BloodLine – Blood Bank Management System",
      subtitle: "Full-stack web application for blood donor & inventory coordination",
      category: "Full Stack Web",
      period: "Sep 2025 – Jan 2026",
      description: "A comprehensive full-stack blood bank management system built to streamline donor, patient, and blood inventory workflows with role-based controls and real-time tracking.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Vercel"],
      architectureHighlights: [
        "Role-based access control for administrators, blood banks, donors, and patients",
        "Real-time blood inventory tracking and inter-blood bank request workflows",
        "Automated blood cross-matching and transfer coordination",
        "Deployed on Vercel with PostgreSQL database management via Supabase"
      ],
      features: [
        "Donor and patient profile management with medical eligibility verification",
        "Interactive analytics dashboards monitoring blood unit availability by type",
        "Real-time notifications for critical blood requests and transfer status updates"
      ],
      githubUrl: "https://github.com/shivanvithajayam",
      featured: true
    },
    {
      id: "fake-app-detection",
      title: "Fake App Detection – Android Security Application",
      subtitle: "Android security system using app metadata & Django fraud scoring",
      category: "Android & Security",
      period: "Dec 2025",
      description: "An Android application backed by a Django API that detects fake or malicious applications using multi-layered metadata and permission analysis.",
      technologies: ["Android", "Django", "Python", "Security Analysis"],
      architectureHighlights: [
        "Evidence-based fraud risk scoring algorithm evaluating suspicious application metrics",
        "Publisher identity verification and icon hashing for visual spoofing detection",
        "Permission analysis engine flagging anomalous system access requests",
        "Explainable security report generation breaking down risk factors"
      ],
      features: [
        "Android device scanner inspecting installed app APK metadata",
        "Django backend API performing background risk evaluation and scoring",
        "User-facing detection results page displaying explainable risk indicators"
      ],
      githubUrl: "https://github.com/shivanvithajayam",
      featured: true
    },
    {
      id: "sharebite-app",
      title: "ShareBite – Surplus Food Donation System",
      subtitle: "Cross-platform mobile application connecting food donors with NGOs",
      category: "Mobile & Cloud",
      period: "Mar 2026 – May 2026",
      description: "A Flutter and Firebase mobile application designed to connect food donors with nearby NGOs for efficient surplus food distribution and waste reduction.",
      technologies: ["Flutter", "Firebase", "Firebase Auth", "Cloud Firestore", "Push Notifications"],
      architectureHighlights: [
        "Firebase Authentication and real-time Cloud Firestore synchronization",
        "Location-based NGO matching algorithm optimizing pickup routing",
        "NGO donation acceptance and rejection workflow handling",
        "Push notification system alerting nearby NGOs of new food submissions"
      ],
      features: [
        "Donor interface to list surplus food items with expiry and quantity details",
        "Real-time status tracking for active food donations",
        "NGO portal to view nearby donation alerts, accept listings, and track history"
      ],
      githubUrl: "https://github.com/shivanvithajayam",
      featured: true
    }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      description: "Languages used for core computing, software development, and scripting.",
      skills: [
        { name: "C", context: "Core Coursework" },
        { name: "C++", context: "Core Coursework" },
        { name: "Java", context: "Core Coursework" },
        { name: "Python", context: "Project Experience" },
        { name: "TypeScript", context: "Project Experience" }
      ]
    },
    {
      category: "Frameworks & Development",
      description: "Web, mobile, and desktop application development frameworks.",
      skills: [
        { name: "React", context: "Project Experience" },
        { name: "Next.js", context: "Project Experience" },
        { name: "Flutter", context: "Project Experience" },
        { name: "Django", context: "Project Experience" },
        { name: "JavaFX", context: "Core Coursework" }
      ]
    },
    {
      category: "Databases & Cloud/Backend",
      description: "Relational, document, and backend-as-a-service database platforms.",
      skills: [
        { name: "PostgreSQL", context: "Project Experience" },
        { name: "MySQL", context: "Core Coursework" },
        { name: "MongoDB", context: "Project Experience" },
        { name: "Supabase", context: "Project Experience" },
        { name: "Firebase", context: "Project Experience" }
      ]
    },
    {
      category: "Developer Tools & Systems",
      description: "Version control tools, IDEs, and operating environments.",
      skills: [
        { name: "Git & GitHub", context: "Project Experience" },
        { name: "VS Code", context: "Project Experience" },
        { name: "Android Studio", context: "Project Experience" },
        { name: "Linux", context: "Core Coursework" },
        { name: "Windows", context: "Core Coursework" }
      ]
    }
  ],

  leadership: [
    {
      id: "ieee-bmsce",
      role: "Organizing Committee Member",
      organization: "IEEE Computer Society, BMSCE",
      description: "Contributed to organizing and managing technical events, workshops, and coding sessions for the BMSCE student community."
    },
    {
      id: "pentagram-bmsce",
      role: "Active Member",
      organization: "Pentagram — Mathematical Society of BMSCE",
      description: "Participates in mathematical problem-solving sessions, logic puzzles, and quantitative workshops."
    },
    {
      id: "fac-bmsce",
      role: "Core Committee Member",
      organization: "FAC (Fine Arts Club), BMSCE",
      description: "Coordinates campus cultural events, creative activities, and student engagement initiatives."
    }
  ],

  education: {
    current: {
      institution: "BMS College of Engineering",
      degree: "B.E. in Computer Science & Engineering",
      location: "Bengaluru, Karnataka",
      period: "2024 — 2028 (Expected)",
      score: "CGPA: 9.9 / 10 (Till IV Semester)"
    },
    prior: [
      {
        institution: "Narayana Junior College",
        degree: "Intermediate Education",
        location: "Anantapur, Andhra Pradesh",
        period: "2022 — 2024",
        score: "Percentage: 98%"
      },
      {
        institution: "Sri Chaitanya Techno School",
        degree: "High School (Class X)",
        location: "Andhra Pradesh",
        period: "2021 — 2022",
        score: "Percentage: 96%"
      }
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Computer Organization & Architecture",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems"
    ]
  },

  achievements: [
    {
      title: "Academic Excellence at BMSCE",
      category: "Academic Distinction",
      description: "Achieved a CGPA of 9.9 / 10 through 4 semesters in B.E. Computer Science & Engineering."
    },
    {
      title: "Strong Foundation in Secondary Education",
      category: "Academic Distinction",
      description: "Scored 98% in Intermediate (Narayana Junior College) and 96% in High School (Sri Chaitanya Techno School)."
    },
    {
      title: "IEEE Computer Society Technical Involvement",
      category: "Leadership & Community",
      description: "Active Organizing Committee member facilitating technical events and developer workshops at BMSCE."
    }
  ]
};
