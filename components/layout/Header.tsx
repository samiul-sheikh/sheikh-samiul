import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-[#050709]/90 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                        S
                    </div>
                    <span className="text-sm font-semibold hidden md:block text-gray-300 group-hover:text-white transition-colors">
                        Samiul Sheikh
                    </span>
                </Link>
                {/* <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/samiul_logo.png"
                        alt="Samiul Sheikh Logo"
                        width={250}
                        height={250}
                        priority
                        className="rounded-full object-contain group-hover:scale-110 transition-transform"
                    />
                </Link> */}

                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <Link href="#services" className="hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="#works" className="hover:text-primary transition-colors">
                        Works
                    </Link>
                    <Link href="#resume" className="hover:text-primary transition-colors">
                        Experience
                    </Link>
                    <Link href="#education" className="hover:text-primary transition-colors">
                        Education
                    </Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">
                        Skills
                    </Link>
                    <Link href="#testimonials" className="hover:text-primary transition-colors">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                <a
                    href="/Samiul_Hasan_Sheikh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 bg-gradient-to-r from-primary to-blue-600
                    text-white rounded-full font-medium text-sm
                    hover:shadow-[0_0_20px_rgba(43,127,255,0.5)]
                    transition-all transform hover:-translate-y-0.5"
                >
                    Hire Me!
                </a>
            </div>
        </header>
    );
}
