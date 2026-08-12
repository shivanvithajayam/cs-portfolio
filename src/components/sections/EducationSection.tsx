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
            Education
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Academic degree program, institutional performance, and core computer science coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-5 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Undergraduate Program
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {education.current.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {education.current.institution}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="font-semibold text-sm text-slate-900 dark:text-white">{education.current.score}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Period: {education.current.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{education.current.location}</span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Core Coursework Subjects</span>
            </h3>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-4 shadow-xs">
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {education.coursework.map((subject, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                    <span className="font-medium text-sm text-slate-900 dark:text-slate-100">{subject}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                Coursework emphasizes theoretical fundamentals alongside practical lab implementations in C, C++, Java, and Python.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
