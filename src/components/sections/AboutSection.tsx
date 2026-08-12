import { portfolioData } from "@/data/portfolioData";
import { Layers, ShieldCheck, Smartphone, Users, CheckCircle2, Code2 } from "lucide-react";

export default function AboutSection() {
  const { personalInfo } = portfolioData;

  const focusAreas = [
    {
      title: "Full-Stack Web Engineering",
      description: "Building responsive, data-driven web platforms using Next.js, React, TypeScript, PostgreSQL, and Supabase.",
      icon: Layers
    },
    {
      title: "Android Security Analysis",
      description: "Developing mobile security tools with Django backend APIs, metadata permission analysis, and risk scoring.",
      icon: ShieldCheck
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Creating mobile applications using Flutter, Firebase Authentication, Cloud Firestore, and live push notifications.",
      icon: Smartphone
    },
    {
      title: "Technical Communities & Leadership",
      description: "Organizing Committee member for IEEE Computer Society BMSCE, member of Pentagram (Math Society), and FAC Core Committee.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200 dark:border-[#1f2937] bg-slate-50/50 dark:bg-[#0f172a]/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Expanded Bio Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span>Academic & Engineering Principles:</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>High Academic Standing:</strong> CGPA of {personalInfo.cgpa} in B.E. Computer Science & Engineering at BMSCE Bengaluru.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Hands-on Systems Construction:</strong> Architected full-stack web platforms (BloodLine, ExpenseGo), Android security analyzers, and mobile applications (ShareBite).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Computer Science Rigor:</strong> Strong grounding in Data Structures & Algorithms, Operating Systems, Database Systems, and Computer Architecture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Community Engagement:</strong> Active involvement in technical societies, event organization, and peer problem-solving sessions at BMSCE.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Focus Areas Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-[#1f2937] bg-white dark:bg-[#111827] shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
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
