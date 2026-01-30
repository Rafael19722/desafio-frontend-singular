"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
    {
        id: 1,
        text: "Não há beleza perfeita que não contenha alguma singularidade em suas proporções.",
        author: "FRANCIS BACON",
        role: "Filósofo",
    },
    {
        id: 2,
        text: "A saúde é o resultado não só de nossos atos como também de nossos pensamentos.",
        author: "MAHATMA GANDHI",
        role: "Líder Pacifista",
    },
    {
        id: 3,
        text: "A arte da medicina consiste em distrair o paciente enquanto a natureza cura a doença.",
        author: "VOLTAIRE",
        role: "Escritor",
    },
];

export function Quotes() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative bg-gray-50 py-24 px-8 md:px-[295.5px] w-full overflow-hidden">
            
            <div className="absolute top-10 left-10 opacity-10 text-primary pointer-events-none">
                <Quote size={200} />
            </div>

            <div className="max-w-[864px] mx-auto flex flex-col items-center relative z-10">
                
                <div className="pb-8">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <Quote size={24} fill="currentColor" />
                    </div>
                </div>

                <div className="w-full h-[200px] flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center px-6"
                        >
                            <p className="font-sans font-light italic text-2xl md:text-4xl leading-tight text-dark">
                                "{TESTIMONIALS[current].text}"
                            </p>
                            <div className="flex flex-col items-center gap-1">
                                <h4 className="font-bold text-xl tracking-[2px] text-dark uppercase">
                                    {TESTIMONIALS[current].author}
                                </h4>

                                <span className="font-semibold text-sm text-gray-500">
                                    {TESTIMONIALS[current].role}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="pt-12 flex gap-2">
                    {TESTIMONIALS.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1 rounded-b-full transition-all duration-300 ${
                                index === current
                                ? "w-10 bg-primary"
                                : "w-10 bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}