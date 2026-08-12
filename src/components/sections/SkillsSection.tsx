"use client";

import { useState } from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { Search, Code, Globe, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const { skillCategories } = portfolioData;
  const [searchQuery, setSearchQuery] = useState("");

  const categoryIcons: Record<string, typeof Code> = {
    "Programming Languages": Code,
    "Frameworks & Development": Globe,
    "Databases & Cloud/Backend": Database,
    "Developer Tools & Systems": Wrench,
  };

  const getContextBadgeStyle = (context: string) => {
    switch (context) {
      case "Core Coursework":
        return "bg-slate-100 dark:bg-[#1f2937] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
      case "Project Experience":
        return "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60";
      default:
        return "bg-slate-100 dark:bg-[#1f2937] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-slate-200 dark:border-[#1f2937] bg-slate-50/50 dark:bg-[#0f172a]/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Technical Skills & Tools
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Verified skills supported directly by coursework and software projects.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. C++, React, PostgreSQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1f2937] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-[#111827] p-3 rounded-xl border border-slate-200 dark:border-[#1f2937]">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Legend / Context:</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></span>
            <span>Core Coursework (BMSCE)</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Project Experience</span>
          </span>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat: SkillCategory) => {
            const Icon = categoryIcons[cat.category] || Code;
            
            const matchingSkills = cat.skills.filter((skill) =>
              skill.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && matchingSkills.length === 0) return null;

            return (
              <div
                key={cat.category}
                className="p-6 rounded-2xl border border-slate-200 dark:border-[#1f2937] bg-white dark:bg-[#111827] space-y-4 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {matchingSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#1f2937] bg-slate-50/50 dark:bg-[#0b1120] text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-blue-500/50 transition-colors"
                    >
                      <span className="font-semibold">{skill.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${getContextBadgeStyle(
                          skill.context
                        )}`}
                      >
                        {skill.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
