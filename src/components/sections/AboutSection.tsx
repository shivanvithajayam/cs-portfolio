import { portfolioData } from "@/data/portfolioData";
import { Layers, ShieldCheck, Smartphone, Users, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { personalInfo } = portfolioData;

  const focusAreas = [
    {
      title: "Full-Stack Web Development",
      description: "Building scalable web management platforms using Next.js, React, TypeScript, PostgreSQL, and Supabase.",
      icon: Layers
    },
    {
      title: "Android & Security Applications",
      description: "Developing mobile security software with Django backends, permission analysis, and risk scoring.",
      icon: ShieldCheck
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile apps with Flutter, Firebase Authentication, and real-time Firestore sync.",
      icon: Smartphone
    },
    {
      title: "Technical Community & Societies",
      description: "Organizing Committee member at IEEE Computer Society BMSCE and active member of Pentagram (Math Society).",
      icon: Users
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
          
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-4 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Academic & Technical Strengths:
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>High Academic Standing:</strong> CGPA of 9.88 / 10 (till III Semester) in B.E. Computer Science & Engineering at BMSCE.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Hands-on Project Execution:</strong> Built production-ready systems including a blood bank management web application, an Android malware detector, and a food donation platform.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Core CS Mastery:</strong> Data Structures & Algorithms, Operating Systems, Computer Organization & Architecture, and DBMS.</span>
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
