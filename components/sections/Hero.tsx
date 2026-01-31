"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  dict: {
    first_slide: {
        tag: string
        title_1: string
        title_2: string
        description: string
        buttonText: string
    },
    second_slide: {
        tag: string
        title: string
        description: string
        buttonText: string
    }
  }
}



export function Hero({ dict }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDES = [
    {
      id: 1,
      image: "/images/hero-image.png",
      tag: dict.first_slide.tag,
      title: <>{dict.first_slide.title_1} <br /> {dict.first_slide.title_2}</>,
      description: dict.first_slide.description,
      buttonText: dict.first_slide.buttonText,
    },
    {
      id: 2,
      image: "/images/hero-image-2.jpg", 
      tag: dict.second_slide.tag,
      title: <>{dict.second_slide.title_1} <br /> {dict.second_slide.title_2}</>,
      description: dict.second_slide.description,
      buttonText: dict.second_slide.buttonText,
    }
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[current];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current, isPaused]);

  return (
    <section 
      className="relative w-full h-[692px] flex items-center bg-black overflow-hidden group"             
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}  
    >
      
      <AnimatePresence>
        <motion.div
          key={slide.id} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} 
          className="absolute inset-0"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.image}
              alt={slide.description}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

          <div 
            className="absolute inset-0 z-10" 
            style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-start pt-[176px] pl-8 md:pl-[120px] pr-8">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="flex flex-col items-start w-full"
          >
            <div className="pb-4">
                <span className="font-heading font-bold text-primary tracking-widest uppercase">
                    {slide.tag}
                </span>
            </div>

            <div className="md:max-w-[768px] pb-6">
                <h1 className="font-heading font-bold text-4xl sm:w-4xl md:text-7xl text-white leading-tight">
                    {slide.title}
                </h1>
            </div>

            <div className="max-w-[576px] pb-10 mt-14 md:mt-0">
                <p className="text-gray-200 text-lg md:text-2xl font-normal leading-relaxed">
                    {slide.description}
                </p>
            </div>

            <div className="mb-[112px]">
                <Button className="bg-primary hover:bg-primary-dark text-white font-bold text-base uppercase rounded-full px-8 py-4 transition-all shadow-lg hover:scale-105 h-14">
                    {slide.buttonText}
                </Button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      <Button 
        onClick={prevSlide}
        variant="heroArrow"
        size="hero"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </Button>

      <Button 
        onClick={nextSlide}
        variant="heroArrow"
        size="hero"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30"
      >
        <ChevronRight size={48} strokeWidth={1.5} />
      </Button>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {SLIDES.map((item, index) => (
          <Button
            key={item.id}
            variant="pagination"
            size="clear"
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === current ? "w-12 bg-primary" : "w-6 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}