import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | Computer Science & Engineering Portfolio`,
  description: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.degree} Student at ${portfolioData.personalInfo.university}. Software engineering, full-stack web, mobile, and security projects.`,
  keywords: [
    "Jayam Shanmukha Shivanvitha",
    "BMS College of Engineering",
    "BMSCE Bengaluru",
    "Computer Science Student",
    "B.Tech CSE",
    "Software Engineering Portfolio",
    "Full-Stack Web Development",
    "Data Structures and Algorithms",
    "React Next.js Portfolio"
  ],
  authors: [{ name: portfolioData.personalInfo.name }],
  openGraph: {
    title: `${portfolioData.personalInfo.name} | CSE Student Portfolio`,
    description: portfolioData.personalInfo.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.personalInfo.name,
    "jobTitle": "Computer Science & Engineering Student",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": portfolioData.personalInfo.university
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": portfolioData.personalInfo.university
    },
    "url": "https://github.com/shivanvithajayam",
    "sameAs": [
      portfolioData.personalInfo.githubUrl,
      portfolioData.personalInfo.linkedinUrl
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col font-sans bg-white dark:bg-[#0b1120] text-slate-900 dark:text-[#F8FAFC]"
      >
        {children}
      </body>
    </html>
  );
}
