"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface QuotesProps {
    dict: {
        quote_1: { text: string; author: string; role: string },
        quote_2: { text: string; author: string; role: string },
        quote_3: { text: string; author: string; role: string }        
    }
}

export function Quotes({ dict }: QuotesProps) {
    const TESTIMONIALS = [
        {
            id: 1,
            text: dict.quote_1.text,
            author: dict.quote_1.author,
            role: dict.quote_1.role,
        },
        {
            id: 2,
            text: dict.quote_2.text,
            author: dict.quote_2.author,
            role: dict.quote_2.role,
        },
        {
            id: 3,
            text: dict.quote_3.text,
            author: dict.quote_3.author,
            role: dict.quote_3.role,
        },
    ];

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current, isPaused]);

    return (
        <section className="relative bg-gray-50 py-24 px-8 md:px-[120px] w-full overflow-hidden">
            
            <div className="absolute top-10 left-10 opacity-5 text-primary pointer-events-none">
                <Quote size={200} />
            </div>

            <div 
                className="max-w-[864px] mx-auto flex flex-col items-center relative z-10"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                
                <div className="pb-8">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <Quote size={24} fill="currentColor" />
                    </div>
                </div>

                <div className="w-full min-h-[300px] flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={TESTIMONIALS[current].id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ willChange: "opacity, transform" }}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <p className="font-sans font-light italic text-xl md:text-3xl lg:text-4xl leading-relaxed text-dark max-w-3xl">
                                "{TESTIMONIALS[current].text}"
                            </p>
                            
                            <div className="flex flex-col items-center gap-1 mt-8">
                                <h4 className="font-bold text-lg md:text-xl tracking-[2px] text-dark uppercase">
                                    {TESTIMONIALS[current].author}
                                </h4>
                                <span className="font-semibold text-sm text-gray-500 uppercase tracking-widest">
                                    {TESTIMONIALS[current].role}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="pt-4 flex gap-2">
                    {TESTIMONIALS.map((_, index) => (
                        <Button 
                            key={index}
                            variant="pagination"
                            size="clear"
                            onClick={() => setCurrent(index)}
                            aria-label={`Ir para depoimento ${index + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                index === current
                                ? "w-12 bg-primary" 
                                : "w-6 bg-gray-300 hover:bg-gray-400" 
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}