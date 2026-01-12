"use client";

import { Timeline } from "@/components/ui/timeline";
import { Code2, Briefcase, Store, GraduationCap, } from "lucide-react";


const experienceData = [
    {
        title: "2022 - 2025",
        content: (
            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                        <Code2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">Software Engineer</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">Bindulogic LLC</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Led the development of scalable web applications, contributing to system architecture,
                    performance optimization, and code quality while collaborating closely with cross-functional teams.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">TypeScript</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Tailwind CSS</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Docker</span>
                </div>
            </div>
        ),
    },
    {
        title: "2021 - 2022",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <GraduationCap className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">Software Engineer Trainee</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">Bindulogic LLC</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Assisted in developing full-stack applications, implementing responsive user interfaces,
                    and working with APIs and databases under senior developer guidance.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">React</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Chakra UI</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Prisma</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">RTK Query</span>
                </div>
            </div>
        ),
    },
    {
        title: "2020 - 2021",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Briefcase className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">IT Consultant</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">Compass Architects</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Provided IT and web consulting services, improving online presence through website optimization,
                    content structure, and digital strategy support.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">WordPress</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">SEO</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Digital Marketing</span>
                </div>
            </div>
        ),
    },
    {
        title: "2018 - 2020",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                        <Store className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">WordPress Developer</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">Freelancing</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Developed and customized WordPress websites, including WooCommerce solutions,
                    landing pages, and client-focused content-driven designs.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Wordpress</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">WooCommerce</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Landing page</span>
                </div>
            </div>
        ),
    },
];

export function ResumeSection() {
    return (
        <section id="resume" className="py-20 bg-[#050709] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">Work</span>{" "}
                        <span className="text-white">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A journey through my professional career, building digital products
                        and leading development teams.
                    </p>
                </div>

                <div className="relative w-full overflow-clip">
                    <Timeline data={experienceData} />
                </div>
            </div>
        </section>
    );
}
