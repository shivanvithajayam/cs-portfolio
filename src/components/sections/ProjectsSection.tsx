"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ExternalLink, Code, Layers, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ["All", "Backend & Systems", "Web & Algorithms", "AI & Tools", "Full-Stack Web"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected Technical Projects
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Engineering projects demonstrating software architecture, algorithms, and full-stack development.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                {/* Project Header */}
                <div className="p-6 pb-4 flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Repository Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Technical Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand / Details Toggle Button */}
                <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0f172a]/50 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors focus:outline-none"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>{isExpanded ? "Hide Technical Details" : "View Code & Architecture"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-medium"
                  >
                    <span>Source Code</span>
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Inline Drawer for Detailed Code & System Architecture */}
                {isExpanded && (
                  <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>System Architecture Overview</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {project.codeSnippet && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>{project.codeSnippet.filename}</span>
                          <span className="uppercase text-[10px] bg-slate-800 px-2 py-0.5 rounded">{project.codeSnippet.language}</span>
                        </div>
                        <pre className="p-3 rounded-lg bg-slate-950 text-slate-200 text-[11px] font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                          <code>{project.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
