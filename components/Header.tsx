"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, ClipboardList } from "lucide-react";

interface HeaderProps {
    lang: string
    dict: {
        budget: string
        budget_short: string
    };
}

export function Header({ lang, dict}: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md py-2 md:py-4" : "bg-white/90 backdrop-blur-md py-3 md:py-6"
        }`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="font-heading text-lg md:text-2xl font-bold tracking-tight shrink-0">
                    <span className="text-primary">FARMÁ</span>
                    <span className="text-dark">CIA</span>
                </Link>

                <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex gap-2">
                        <Link href="/es">
                            <Button variant="ghost" className={lang === 'es' ? "text-primary" : "text-gray-600"}>
                                ES
                            </Button>
                        </Link>
                        <Link href="/pt">
                            <Button variant="ghost" className={lang === 'pt' ? "text-primary" : "text-gray-600"}>
                                PT
                            </Button>
                        </Link>
                    </div>
                    <Button className="bg-primary hover:bg-primary-dark text-white font-semibold h-9 md:h-11 px-3 md:px-6 rounded-full transition-colors shadow-lg shadow-primary/30 gap-2 uppercase text-[12px] md:text-sm">
                        <ClipboardList className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="hidden md:inline">{dict.budget}</span>
                        <span className="md:hidden">{dict.budget_short}</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}