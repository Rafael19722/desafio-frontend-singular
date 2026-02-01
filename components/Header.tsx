"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, ClipboardList } from "lucide-react";
import { handleScroll as handleScrollForm } from "@/lib/smooth-scroll";


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

                <div className="flex items-center gap-4 md:gap-6">

                    <div className="flex items-center gap-3 pr-4 md:pr-6 border-r border-gray-200 h-8">
                        <Link href="/es">
                            <div className={`relative w-8 h-6 md:w-9 md:h-7 rounded overflow-hidden shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer border border-gray-100
                                ${lang === 'es'
                                    ? "ring-2 ring-primary ring-offset-2 opacity-100 scale-110"
                                    : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                                }`}
                                title="Español"
                            >
                                <Image src="/images/flagES.png" alt="Spanish flag" fill />
                            </div>
                        </Link>                    
                        <Link href="/pt">
                            <div className={`relative w-8 h-6 md:w-9 md:h-7 rounded overflow-hidden shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer border border-gray-100
                                ${lang === 'pt'
                                    ? "ring-2 ring-primary ring-offset-2 opacity-100 scale-110"
                                    : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                                }`}
                                title="português"
                            >
                                <Image src="/images/flagBR.png" alt="Brazil flag" fill />
                            </div>    
                        </Link>
                        <Button 
                            onClick={(e) => handleScrollForm(e, "budgetForm")}  
                            className="bg-primary hover:bg-primary-dark text-white font-semibold h-9 md:h-11 px-3 md:px-6 rounded-full transition-colors shadow-lg shadow-primary/30 gap-2 uppercase text-[12px] md:text-sm"
                        >
                            <ClipboardList className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="hidden md:inline">{dict.budget}</span>
                            <span className="md:hidden">{dict.budget_short}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}