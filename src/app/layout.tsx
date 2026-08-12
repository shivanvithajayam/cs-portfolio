import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | Computer Science & Engineering Portfolio`,
  description: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.degree} Student at ${portfolioData.personalInfo.university}. Seeking Software Engineering & Technology Internships.`,
  keywords: [
    "Jayam Shanmukha Shivanvitha",
    "BMS College of Engineering",
    "BMSCE Bengaluru",
    "Computer Science Student",
    "B.Tech CSE",
    "Software Engineering Intern",
    "Backend Engineer",
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
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="antialiased min-h-screen flex flex-col font-sans bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100"
      >
        {children}
      </body>
    </html>
  );
}
