import Image from "next/image";
import Link from "next/link";

const works = [
    {
        category: "Ecommerce",
        title: "Eshoppers",
        description:
            "A modern e-commerce web application focused on performance, usability, and scalable architecture. Designed and developed complete user-facing interfaces with state management and API integration.",
        image: "/project/eshoppers.png",
        liveUrl: "https://eshoppers-bd.onrender.com",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
        features: [
            "Responsive UI for all devices",
            "Product listing and details pages",
            "Cart and checkout flow",
            "API integration with state management",
        ],
        imageFirst: false,
    },
    {
        category: "Service",
        title: "Compass Architects",
        description:
            "Official business website for an architecture firm built with WordPress CMS. Focused on clean design, performance optimization, and easy content management for non-technical users.",
        image: "/project/compass.png",
        liveUrl: "https://compassarchi.com/",
        tags: ["WordPress", "Custom Theme", "SEO"],
        features: [
            "Custom WordPress theme",
            "Service and project showcase pages",
            "SEO-friendly structure",
            "Easy content management via CMS",
        ],
        imageFirst: true,
    },
];

export function WorksSection() {
    return (
        <section id="works" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">My Recent</span>{" "}
                        <span className="text-white">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and your customers.
                    </p>
                </div>

                <div className="space-y-24">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12 rounded-[30px] border border-secondary hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Content */}
                            <div className={`space-y-6 ${work.imageFirst ? "order-2" : "order-2 lg:order-1"}`}>
                                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                                    {work.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    {work.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {work.description}
                                </p>

                                <ul className="space-y-3 text-gray-300">
                                    {work.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <span className="material-symbols-outlined text-primary text-base">
                                                check
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {work.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-medium border border-transparent hover:border-primary hover:bg-secondary/70 transition-all cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    {work.liveUrl && (
                                        <Link
                                            href={work.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group"
                                        >
                                            View Live Project
                                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                                arrow_outward
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`group rounded-2xl overflow-hidden relative ${work.imageFirst ? "order-1" : "order-1 lg:order-2"}`}>
                                <div className="bg-gradient-to-br from-secondary to-black rounded-2xl p-4 md:p-8">
                                    <div className="relative h-[300px] md:h-[400px]">
                                        <Image
                                            src={work.image}
                                            alt={`${work.title} Project`}
                                            fill
                                            className="object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats repeater */}
                <div className="container mx-auto px-6 mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10">
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">10</span>
                            <span className="text-sm text-gray-400">
                                Years of <br />Experience
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">80</span>
                            <span className="text-sm text-gray-400">
                                Project <br />Completed
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">50</span>
                            <span className="text-sm text-gray-400">
                                Happy <br />Clients
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">5</span>
                            <span className="text-sm text-gray-400">
                                Years of <br />Industry experience
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
