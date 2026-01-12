"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";


interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}


export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: isMobile ? ["start end", "end end"] : ["start 10%", "end 50%"],
    });


    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);


    return (
        <div
            className="w-full bg-[#050709] font-sans md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-24 md:gap-10"
                    >
                        <div className="md:sticky flex flex-col md:flex-row z-40 items-center md:top-40 self-start">
                            <div className="hidden md:flex h-10 absolute left-3 w-10 rounded-full bg-[#0a101f] flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-primary border-2 border-secondary" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-primary">
                                {item.title}
                            </h3>
                        </div>


                        <div className="relative pl-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-primary">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="hidden md:block absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-secondary to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};