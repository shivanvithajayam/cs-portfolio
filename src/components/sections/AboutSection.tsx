import { portfolioData } from "@/data/portfolioData";
import { Server, Cpu, Brain, GitBranch, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { personalInfo } = portfolioData;

  const focusAreas = [
    {
      title: "Backend & Systems Development",
      description: "Interested in asynchronous processing, concurrent worker pools, API design, and database interaction.",
      icon: Server
    },
    {
      title: "Algorithms & Problem Solving",
      description: "Strong focus on fundamental data structures, graph algorithms, and space/time complexity trade-offs.",
      icon: Cpu
    },
    {
      title: "AI & Practical Applications",
      description: "Exploring real-world integration of machine learning APIs, static code analysis, and developer tooling.",
      icon: Brain
    },
    {
      title: "Software Engineering Discipline",
      description: "Committed to version control workflows (Git/GitHub), modular code design, testing, and documentation.",
      icon: GitBranch
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0c1220]/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-4 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Core Engineering Mindset:
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>First-Principles Understanding:</strong> Grasping how memory, operating systems, and network protocols function under the hood.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Readability & Maintainability:</strong> Writing code that peers and teammates can easily review, test, and build upon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Continuous Learning:</strong> Eager to adapt to new technology stacks and learn from experienced software engineers during internships.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Focus Areas Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {area.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
