"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Feel free to reach out via email, connect on LinkedIn/GitHub, or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Contact & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Action */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email Address
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] space-y-3 shadow-xs">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Profiles
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>shivanvithajayam</span>
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>shivanvithajayam</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out. You can also send a direct email to <strong>{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Collaboration / General Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Shivanvitha, I would like to connect with you regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-sm disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Submitting..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
