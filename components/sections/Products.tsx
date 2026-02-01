"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsProps {
    dict: {
        subtitle: string
        title: string
        view_all: string
        product_1: { category: string; name: string; description: string },
        product_2: { category: string; name: string; description: string },
        product_3: { category: string; name: string; description: string },
        product_4: { category: string; name: string; description: string }
    }
}

export function Products({ dict }: ProductsProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const PRODUCT_LIST = [
        {
            id: 1,
            image: "/images/medicine-1.png",
            category: dict.product_1.category,
            name: dict.product_1.name,
            description: dict.product_1.description,
        },
        {
            id: 2,
            image: "/images/medicine-2.png",
            category: dict.product_2.category,
            name: dict.product_2.name,
            description: dict.product_2.description
        },
        {
            id: 3,
            image: "/images/medicine-3.png",
            category: dict.product_3.category,
            name: dict.product_3.name,
            description: dict.product_3.description
        },
        {
            id: 4,
            image: "/images/medicine-2.png",
            category: dict.product_4.category,
            name: dict.product_4.name,
            description: dict.product_4.description
        },
        {
            id: 5,
            image: "/images/medicine-1.png",
            category: dict.product_1.category,
            name: dict.product_1.name,
            description: dict.product_1.description,
        },
    ];

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="products" className="bg-white py-24 w-full flex-col gap-12 overflow-hidden">
            
            <div className="w-full max-w-[1280px] mx-auto mb-[48px] px-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                
                <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-sm tracking-[0.1em] text-primary uppercase">
                        {dict.subtitle}
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark leading-tight">
                        {dict.title}
                    </h2>
                </div>

                <Button variant="ghost" className="group flex items-center gap-2 text-dark hover:text-primary transition-colors pb-2">
                    <span className="font-semibold text-base">{dict.view_all}</span>
                    <ArrowRight size={20} className="text-primary transition-transform group-hover:translate-x-1" />
                </Button>

            </div>

            <div 
                ref={sliderRef}
                className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                
                <div className="flex gap-8 w-max px-8 md:px-[72.75px]">
                    {PRODUCT_LIST.map((product) => (
                        <div 
                            key={product.id}
                            className="w-[320px] md:w-[400px] h-[635px] shrink-0 rounded-[40px] overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300 group border border-transparent hover:border-gray-100"
                        >
                            <div className="relative w-full h-[450px] bg-gray-200 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <Image 
                                        src={product.image} 
                                        alt="Remédios mais vendidos" 
                                        fill 
                                        className="object-cover pointer-events-none" 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                    />
                                </div>
                            </div>
                            <div className="h-[185px] p-8 pt-[37px] flex flex-col gap-2.5">

                                <span className="font-semibold text-xs tracking-wider text-primary-dark uppercase">
                                    {product.category}
                                </span>

                                <h3 className="font-heading font-bold text-2xl text-dark leading-tight">
                                    {product.name}
                                </h3>

                                <p className="font-sans font-normal text-sm leading-[22.75px] text-gray-600 mt-1 line-clamp-2">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}