"use client";

import Image from "next/image";
import Link from "next/link";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Particles } from "@/components/ui/particles";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export function HeroSection() {
    return (
        <section className="pt-36 pb-20 relative overflow-hidden bg-[#050709]">
            {/* Particles Background */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={120}
                ease={80}
                color="#ffffff"
                size={0.5}
                staticity={30}
            />

            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="relative z-10 order-2 lg:order-1 space-y-6 lg:space-y-5">

                    <h3 className="text-2xl font-bold text-white tracking-wide">
                        Hi, I’m Samiul Sheikh 👋
                    </h3>
                    <h1 className="font-bold tracking-tight">
                        <div className="min-h-[3.2rem] sm:min-h-[3.4rem] lg:min-h-[4.5rem]">
                            <TypingAnimation
                                className="text-gradient-blue text-5xl lg:text-[60px] leading-tight"
                                words={["Software Engineer", "Full Stack Developer"]}
                                loop
                                typeSpeed={80}
                                deleteSpeed={50}
                                pauseDelay={2000}
                                cursorStyle="line"
                            />
                        </div>
                    </h1>
                    <p className="mt-2 lg:mt-1 text-gray-400 max-w-lg leading-relaxed text-lg">
                        I build scalable, high-performance web applications using modern technologies,
                        focused on clean code, great user experience, and real business impact.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                        <a
                            href="/Samiul_Sheikh_Resume.pdf"
                            download
                            className="px-8 py-3.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center gap-2 group text-sm font-medium hover:shadow-[0_0_20px_rgba(43,127,255,0.3)]"
                        >
                            Download CV
                        </a>
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/samiul-sheikh"
                                target="_blank"
                                className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(43,127,255,0.4)]"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/samiul-sheikh"
                                target="_blank"
                                className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(43,127,255,0.4)]"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="https://wa.me/8801784097404?text=Hello%20Samiul,%20I%20would%20like%20to%20discuss%20a%20project"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat on WhatsApp"
                                className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(43,127,255,0.4)]"
                            >
                                <MessageCircle size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="relative w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] lg:w-[480px] lg:h-[550px] rounded-[30px] overflow-hidden border-2 border-secondary rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl shadow-primary/10 bg-card">
                        <Image
                            src="/image/samiul_sheikh.jpg"
                            alt="Samiul Sheikh Portrait"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="container mx-auto px-6 mt-20 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10">
                    <div className="flex items-center gap-3">
                        <span className="text-5xl font-bold text-white hover:text-primary transition-colors">
                            8
                        </span>
                        <span className="text-sm text-gray-400">
                            Years of <br />Experience
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-5xl font-bold text-white hover:text-primary transition-colors">
                            80
                        </span>
                        <span className="text-sm text-gray-400">
                            Project <br />Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-5xl font-bold text-white hover:text-primary transition-colors">
                            50
                        </span>
                        <span className="text-sm text-gray-400">
                            Happy <br />Clients
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-5xl font-bold text-white hover:text-primary transition-colors">
                            5
                        </span>
                        <span className="text-sm text-gray-400">
                            Years of industry experience
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
