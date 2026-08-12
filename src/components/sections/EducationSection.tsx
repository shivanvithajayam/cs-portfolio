import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0c1220]/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Academic Background
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Degree program, specialization, and foundational computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-5 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Period: {education.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Expected Graduation: {education.expectedGraduation}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Academic Focus:
              </span>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {education.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categorized Relevant Coursework */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Relevant Computer Science Coursework</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {education.coursework.map((group, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-3 shadow-xs"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {group.category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {group.subjects.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-1.5 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">Engineering Rigor at BMSCE:</span> Coursework combines mathematical foundations, lab coding sessions in C++ and Python, and team-based software engineering term projects.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
