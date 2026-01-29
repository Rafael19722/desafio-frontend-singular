"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function Header() {
    const [isScolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScolled ? "bg-white shadow-md py-4" : "bg-white/90 backdrop-blur-md py-6"
        }`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
                    <span className="text-primary">FARMÁ</span>
                    <span className="text-dark">CIA</span>
                </Link>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        <Globe size={18} />
                        <span className="hidden sm:inline">PT / ES</span>
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-lg shadow-primary/30">
                        Solicitar Orçamento
                    </button>
                </div>
            </div>
        </header>
    )
}