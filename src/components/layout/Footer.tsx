import { portfolioData } from "@/data/portfolioData";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-[#1f2937] bg-slate-50 dark:bg-[#080d1a] text-slate-600 dark:text-slate-400 py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Subtitle */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              B.E. Computer Science & Engineering • BMS College of Engineering, Bengaluru
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 dark:border-[#1f2937] hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 dark:border-[#1f2937] hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="p-2 rounded-lg border border-slate-200 dark:border-[#1f2937] hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-slate-200 dark:bg-[#111827] text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-[#1f2937]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Jayam Shanmukha Shivanvitha. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <p className="font-mono text-[11px]">Personal Engineering Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
