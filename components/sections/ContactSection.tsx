"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

interface FormStatus {
    type: "idle" | "loading" | "success" | "error";
    message: string;
}

export function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState<FormStatus>({
        type: "idle",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            setStatus({
                type: "error",
                message: "Please fill in all required fields.",
            });
            return;
        }

        setStatus({ type: "loading", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon. 🚀",
            });

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
            });
        }
    };

    return (
        <section id="contact" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="bg-card rounded-[30px] p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 border border-secondary">
                    {/* Form Side */}
                    <div className="flex-1 bg-black/30 p-4 sm:p-6 lg:p-8 rounded-3xl border border-gray-800">
                        <h2 className="text-4xl font-bold mb-2">
                            <span className="text-primary">Let&apos;s work</span>{" "}
                            <span className="text-white">together!</span>
                        </h2>
                        <p className="text-gray-400 text-sm mb-8">
                            I design and code beautifully simple things and I love what I do.
                            Just simple like that!
                        </p>

                        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name *"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                    disabled={status.type === "loading"}
                                />
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name *"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                    disabled={status.type === "loading"}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email address *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                    disabled={status.type === "loading"}
                                />
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                    disabled={status.type === "loading"}
                                />
                            </div>

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="bg-input border border-gray-800 text-gray-400 rounded-lg p-3 w-full h-12 focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm disabled:opacity-50"
                                disabled={status.type === "loading"}
                            >
                                <option value="">Select an option</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Custom Software Development">Custom Software Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Others">Others</option>
                            </select>

                            <Textarea
                                name="message"
                                placeholder="Message *"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="bg-input border-gray-800 text-white rounded-lg p-3 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500 resize-none"
                                disabled={status.type === "loading"}
                            />

                            {/* Status Message */}
                            {status.message && (
                                <div
                                    className={`p-4 rounded-lg text-sm font-medium transition-all ${status.type === "success"
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : status.type === "error"
                                            ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                            : ""
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={status.type === "loading"}
                                className="bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all mt-4 h-12 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status.type === "loading" ? (
                                    <span className="flex items-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info Side */}
                    <div className="lg:w-1/3 space-y-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-xl">phone</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <a
                                    href="tel:+8801784097404"
                                    className="text-white font-bold text-lg hover:text-primary transition-colors"
                                >
                                    +88 01784097404
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-xl">email</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a
                                    href="mailto:sheikh.samiul1971@gmail.com"
                                    className="text-white font-bold text-lg hover:text-primary transition-colors"
                                >
                                    sheikh.samiul1971@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-xl">
                                    location_on
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Address</p>
                                <h4 className="text-white font-bold text-lg">
                                    Dhaka, Bangladesh
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
