"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download, Mail, MapPin, GraduationCap, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function HeroSection() {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" className="relative py-16 sm:py-24 md:py-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-4 left-10 w-72 h-72 bg-slate-500/5 dark:bg-slate-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.availabilityStatus}</span>
          </div>

          {/* Main Name & Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400">
              {personalInfo.degree}
            </p>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] font-medium">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>{personalInfo.university}</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-500" />
              <span>Expected Graduation: {personalInfo.expectedGraduation}</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
            {personalInfo.tagline} Building full-stack web applications, mobile apps, and security tools with clean architecture and modern software engineering practices.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-xs"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-[#111827] hover:bg-slate-200 dark:hover:bg-[#1f2937] text-slate-800 dark:text-[#F8FAFC] font-medium text-sm border border-slate-200 dark:border-[#1f2937] transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-500 dark:text-[#94A3B8]" />
              <span>Get in Touch</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-[#1f2937] hover:border-blue-500 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Direct Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-slate-500 dark:text-[#94A3B8] text-xs font-medium">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personalInfo.email}</span>
            </a>
            <span>•</span>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>shivanvithajayam</span>
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>shivanvithajayam</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
