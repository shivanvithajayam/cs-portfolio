import { portfolioData, ExperienceItem, AchievementItem } from "@/data/portfolioData";
import { Briefcase, Trophy, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Achievements
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Academic engineering work, coding achievements, and technical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Engineering & Project Experience</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {experience.map((item: ExperienceItem) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#090d16] border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-110 transition-transform" />

                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-3 shadow-xs">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                          {item.type}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                          {item.role}
                        </h4>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {item.organization}
                        </p>
                      </div>

                      <div className="text-right text-xs text-slate-500 dark:text-slate-400 font-medium space-y-0.5">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-300">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Coding Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Real Achievements & Milestones</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((ach: AchievementItem, index: number) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-2 shadow-xs hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {ach.category}
                    </span>
                    {ach.date && (
                      <span className="text-xs text-slate-400 font-medium">{ach.date}</span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified & Honest Portfolio</span>
                </span>
                <p>
                  No fabricated metrics or false claims. All projects and skills represent active coursework and hands-on software development at BMS College of Engineering.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
