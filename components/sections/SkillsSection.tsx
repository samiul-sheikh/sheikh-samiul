import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiWordpress,
    SiTailwindcss,
    SiShadcnui,
    SiChakraui,
    SiPrisma,
    SiDocker,
    SiGithub,
    SiWoocommerce,
    SiExpress,
    SiMui,
    SiPostgresql,
    SiMongodb,
} from "react-icons/si";
import { MdSearch } from "react-icons/md";

const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "shadcn/ui", icon: SiShadcnui },
    { name: "Material UI", icon: SiMui },
    { name: "Chakra UI", icon: SiChakraui },
    { name: "Prisma", icon: SiPrisma },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub", icon: SiGithub },
    { name: "WordPress", icon: SiWordpress },
    { name: "WooCommerce", icon: SiWoocommerce },
    { name: "SEO", icon: MdSearch }
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">My</span>{" "}
                        <span className="text-white">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and your customers.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 bg-card
                            rounded-2xl border border-transparent hover:border-primary
                            hover:bg-secondary transition-all cursor-pointer h-40"
                        >
                            <skill.icon
                                size={36}
                                className="text-gray-400 mb-4 group-hover:text-primary transition-colors"
                            />
                            <span className="text-primary font-semibold text-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
