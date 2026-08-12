import { portfolioData, LeadershipItem, AchievementItem } from "@/data/portfolioData";
import { Users, Award, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { leadership, achievements } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200 dark:border-[#1f2937] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Activities, Leadership & Academic Honors
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Technical society involvement, committee leadership, and academic milestones at BMSCE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Leadership & Activities List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Extracurricular Activities & Societies</span>
            </h3>

            <div className="space-y-4">
              {leadership.map((item: LeadershipItem) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-[#1f2937] bg-white dark:bg-[#111827] space-y-2 shadow-xs hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                      {item.role}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                    {item.organization}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Honors */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Academic Distinctions</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((ach: AchievementItem, index: number) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-[#1f2937] bg-white dark:bg-[#111827] space-y-2 shadow-xs hover:border-blue-500/50 transition-colors"
                >
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {ach.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-[#0b1120] text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Resume Fact Verification</span>
                </span>
                <p>
                  All displayed details, grades, coursework, and club commitments are verified directly from Jayam Shanmukha Shivanvitha's academic resume.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
