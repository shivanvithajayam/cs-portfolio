export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  bio: string[];
  availabilityStatus: string;
  university: string;
  degree: string;
  expectedGraduation: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Backend & Systems' | 'Web & Algorithms' | 'AI & Tools' | 'Full-Stack Web';
  description: string;
  longDescription: string;
  technologies: string[];
  architectureHighlights: string[];
  features: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
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

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Academic / Project' | 'Internship' | 'Leadership';
  points: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  major: string;
  location: string;
  period: string;
  expectedGraduation: string;
  highlights: string[];
  coursework: {
    category: string;
    subjects: string[];
  }[];
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  date?: string;
}

export const portfolioData: {
  personalInfo: PersonalInfo;
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationInfo;
  achievements: AchievementItem[];
} = {
  personalInfo: {
    name: "Jayam Shanmukha Shivanvitha",
    shortName: "Shivanvitha",
    title: "Computer Science & Engineering Student",
    tagline: "Building software, exploring AI applications, and sharpening core computer science fundamentals.",
    bio: [
      "I am a Computer Science & Engineering student at BMS College of Engineering, Bengaluru, pursuing a B.Tech in CSE.",
      "My technical interests lie in backend development, software system design, algorithms, and practical applications of Artificial Intelligence.",
      "I focus on writing clean, maintainable code, understanding core computer science principles from first principles, and building meaningful projects that solve real-world problems."
    ],
    availabilityStatus: "Seeking Summer / Fall 2026 Software Engineering & Technology Internships",
    university: "BMS College of Engineering, Bengaluru",
    degree: "B.Tech in Computer Science and Engineering",
    expectedGraduation: "2028",
    location: "Bengaluru, Karnataka, India",
    email: "shivanvitha.jayams@gmail.com",
    githubUrl: "https://github.com/shivanvithajayam",
    linkedinUrl: "https://linkedin.com/in/shivanvithajayam",
    resumeUrl: "#" // Replace with direct link to your PDF resume (e.g., "/resume.pdf")
  },

  projects: [
    {
      id: "task-queue-system",
      title: "Distributed Task Queue & Worker Pool",
      subtitle: "Asynchronous job execution engine with worker pools and retry logic",
      category: "Backend & Systems",
      description: "A concurrent background job execution engine designed to handle asynchronous task processing with task retries, priority handling, and worker pool management.",
      longDescription: "Built to understand concurrency patterns and distributed task handling from the ground up. The system processes background jobs asynchronously using worker pools, persisting task state in Redis and executing worker routines safely with channels and mutex locks.",
      technologies: ["Go", "Redis", "Docker", "REST API", "Concurrency"],
      architectureHighlights: [
        "Channel-driven worker pool for bounded concurrency control",
        "Redis-backed task state persistence for crash fault tolerance",
        "Exponential backoff retry mechanism for failed jobs",
        "Dead-letter queue (DLQ) for non-recoverable tasks"
      ],
      features: [
        "REST API endpoints to submit, inspect, and cancel background tasks",
        "Configurable worker pool size and execution concurrency",
        "Real-time task state monitoring (Pending, Running, Completed, Failed)",
        "Docker Compose setup for easy local deployment"
      ],
      codeSnippet: {
        language: "go",
        filename: "worker_pool.go",
        code: `type WorkerPool struct {
	MaxWorkers int
	TaskQueue  chan Task
	WorkerQueue chan chan Task
	Quit        chan bool
}

func (wp *WorkerPool) Start() {
	for i := 0; i < wp.MaxWorkers; i++ {
		worker := NewWorker(i, wp.WorkerQueue)
		worker.Start()
	}
	go wp.dispatch()
}`
      },
      githubUrl: "https://github.com/shivanvithajayam/distributed-task-queue",
      featured: true
    },
    {
      id: "pathfinding-visualizer",
      title: "Algorithmic Pathfinding & Graph Visualizer",
      subtitle: "Interactive spatial algorithm exploration & benchmarking tool",
      category: "Web & Algorithms",
      description: "An interactive web tool to visualize and compare graph search algorithms including Dijkstra's, A* Search, Breadth-First Search (BFS), and Depth-First Search (DFS).",
      longDescription: "Designed as an educational project to visualize classical graph algorithms. Users can draw custom wall obstacles, place start and target nodes, adjust animation speeds, and benchmark path costs and visited node metrics in real time.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Data Structures"],
      architectureHighlights: [
        "Min-Heap priority queue implementation for efficient Dijkstra and A* node evaluation",
        "Manhattan and Euclidean distance heuristic options for A* Search",
        "Step-by-step state serialization enabling smooth execution step controls"
      ],
      features: [
        "Interactive grid board with drag-and-drop start, target, and obstacle placement",
        "Real-time visualization of visited nodes and optimal path reconstruction",
        "Algorithm complexity metrics display (nodes visited, path length, execution steps)"
      ],
      codeSnippet: {
        language: "typescript",
        filename: "dijkstra.ts",
        code: `export function dijkstra(grid: GridNode[][], startNode: GridNode, finishNode: GridNode) {
  const visitedNodesInOrder: GridNode[] = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift()!;
    if (closestNode.isWall) continue;
    if (closestNode.distance === Infinity) return visitedNodesInOrder;
    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnvisitedNeighbors(closestNode, grid);
  }
}`
      },
      githubUrl: "https://github.com/shivanvithajayam/pathfinding-visualizer",
      liveUrl: "https://pathfinding-visualizer.example.com",
      featured: true
    },
    {
      id: "ai-code-analyzer",
      title: "AI-Assisted Code Review & Security Analyzer",
      subtitle: "Static code checker leveraging AST parsing and structured LLM feedback",
      category: "AI & Tools",
      description: "A developer tool that parses source code files, identifies anti-patterns and potential security risks, and generates structured code review summaries.",
      longDescription: "Combines rule-based static analysis with AI-powered code explanation. It parses code abstract syntax trees (ASTs) to flag common issues like unused variables and unhandled exceptions before passing code snippets to an AI model for architectural suggestions.",
      technologies: ["Python", "FastAPI", "Gemini API", "AST Parsing", "Tailwind CSS"],
      architectureHighlights: [
        "AST parsing using Python's native ast module for zero-latency static checks",
        "Structured JSON schema enforcement for AI feedback prompts",
        "Asynchronous API handling to process file uploads smoothly"
      ],
      features: [
        "Upload source code files or paste code snippets for instant review",
        "Categorized feedback breakdown: Security, Performance, and Style",
        "Clean side-by-side diff view with suggested code fixes"
      ],
      codeSnippet: {
        language: "python",
        filename: "analyzer.py",
        code: `import ast

class SecurityVisitor(ast.NodeVisitor):
    def __init__(self):
        self.issues = []

    def visit_Exec(self, node):
        self.issues.append({"line": node.lineno, "type": "Critical", "msg": "Avoid exec() calls"})
        self.generic_visit(node)

def run_static_analysis(source_code: str):
    tree = ast.parse(source_code)
    visitor = SecurityVisitor()
    visitor.visit(tree)
    return visitor.issues`
      },
      githubUrl: "https://github.com/shivanvithajayam/ai-code-reviewer",
      featured: true
    },
    {
      id: "inventory-manager",
      title: "Relational Inventory & Order Management System",
      subtitle: "Full-stack inventory dashboard with relational database schema",
      category: "Full-Stack Web",
      description: "A full-stack web application designed for stock tracking, order placement, supplier management, and low-inventory alert reporting.",
      longDescription: "Built to practice clean 3-tier software architecture and normalized database design. Supports multi-category item management, automated stock deductions on order processing, and transactional database integrity.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      architectureHighlights: [
        "Normalized relational database schema (3NF) designed for inventory integrity",
        "ACID-compliant database transactions during multi-item order processing",
        "Server Actions for type-safe data mutations without extra API boilerplate"
      ],
      features: [
        "Dashboard overview with stock count analytics and reorder triggers",
        "Product catalog with search, categorization, and threshold filtering",
        "Order creation workflow with real-time stock availability check"
      ],
      githubUrl: "https://github.com/shivanvithajayam/inventory-management-system",
      featured: false
    }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      description: "Core languages used for problem solving, web backends, and scripting.",
      skills: [
        { name: "C++", context: "Active Practice" },
        { name: "Python", context: "Project Experience" },
        { name: "Java", context: "Core Coursework" },
        { name: "TypeScript", context: "Project Experience" },
        { name: "JavaScript (ES6+)", context: "Project Experience" },
        { name: "SQL", context: "Core Coursework" }
      ]
    },
    {
      category: "Computer Science Core",
      description: "Fundamental engineering concepts mastered through academic coursework and hands-on practice.",
      skills: [
        { name: "Data Structures & Algorithms", context: "Active Practice" },
        { name: "Object-Oriented Programming (OOP)", context: "Core Coursework" },
        { name: "Database Management Systems (DBMS)", context: "Core Coursework" },
        { name: "Operating Systems", context: "Core Coursework" },
        { name: "Computer Networks", context: "Core Coursework" },
        { name: "System Design Basics", context: "Active Practice" }
      ]
    },
    {
      category: "Web & Frameworks",
      description: "Modern frameworks and tools used to build responsive web applications and APIs.",
      skills: [
        { name: "React", context: "Project Experience" },
        { name: "Next.js", context: "Project Experience" },
        { name: "Node.js & Express", context: "Project Experience" },
        { name: "FastAPI", context: "Project Experience" },
        { name: "Tailwind CSS", context: "Project Experience" },
        { name: "HTML5 / CSS3", context: "Project Experience" }
      ]
    },
    {
      category: "Tools & Developer Ecosystem",
      description: "Version control, databases, environment tools, and platforms.",
      skills: [
        { name: "Git & GitHub", context: "Project Experience" },
        { name: "Linux / Bash Basics", context: "Core Coursework" },
        { name: "PostgreSQL", context: "Project Experience" },
        { name: "Redis Basics", context: "Project Experience" },
        { name: "Docker Basics", context: "Project Experience" },
        { name: "Postman", context: "Project Experience" }
      ]
    }
  ],

  experience: [
    {
      id: "academic-projects-bmsce",
      role: "Computer Science Student & Project Developer",
      organization: "BMS College of Engineering, Bengaluru",
      location: "Bengaluru, India",
      period: "2023 — Present",
      type: "Academic / Project",
      points: [
        "Designed and implemented full-stack and backend software projects adhering to clean code principles and modular architecture.",
        "Collaborated with student peers on software development assignments using Git version control and GitHub pull request workflows.",
        "Implemented fundamental data structures (Trees, Graphs, Heaps, Hash Tables) and algorithm solutions in C++ and Python during laboratory coursework."
      ]
    },
    {
      id: "placeholder-future-internship",
      role: "[Your Internship / Tech Role Placeholder]",
      organization: "[Company / Organization Name]",
      location: "Bengaluru, India / Remote",
      period: "Upcoming / Target 2026",
      type: "Internship",
      points: [
        "This slot is ready for your software engineering internship, research assistant role, or technical organization experience.",
        "Easily update this entry in src/data/portfolioData.ts as you secure internship offers or take on leadership roles."
      ]
    }
  ],

  education: {
    institution: "BMS College of Engineering",
    degree: "B.Tech in Computer Science and Engineering",
    major: "Computer Science & Engineering",
    location: "Bengaluru, Karnataka, India",
    period: "2024 — 2028 (Expected)",
    expectedGraduation: "May 2028",
    highlights: [
      "Pursuing Bachelor of Technology in Computer Science & Engineering at BMSCE Bengaluru",
      "Focusing on Core Computer Science Fundamentals, Backend Systems, Algorithms, and Software Engineering",
      "Active participant in technical student communities and coding events"
    ],
    coursework: [
      {
        category: "Core Computing",
        subjects: [
          "Data Structures & Algorithms",
          "Object-Oriented Programming (C++/Java)",
          "Design & Analysis of Algorithms"
        ]
      },
      {
        category: "Systems & Infrastructure",
        subjects: [
          "Operating Systems",
          "Database Management Systems (DBMS)",
          "Computer Networks",
          "Computer Organization & Architecture"
        ]
      },
      {
        category: "Software Practice",
        subjects: [
          "Software Engineering Principles",
          "Web Application Development",
          "Formal Languages & Automata Theory"
        ]
      }
    ]
  },

  achievements: [
    {
      title: "Data Structures & Algorithmic Problem Solving",
      category: "Problem Solving",
      description: "Regularly solving algorithmic problems on LeetCode and HackerRank to strengthen problem-solving speed, time-complexity analysis, and edge-case handling."
    },
    {
      title: "Open Source & Software Engineering Projects",
      category: "Projects",
      description: "Created and published multiple open-source repositories on GitHub focusing on backend systems, algorithmic visualizers, and web utilities."
    },
    {
      title: "College Technical Hackathons & Events",
      category: "Hackathons",
      description: "Participated in university coding competitions and hackathon events at BMS College of Engineering, building rapid prototype applications within time limits."
    }
  ]
};
