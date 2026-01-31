"use client"

import { Scale, FlaskConical, HeartHandshake } from "lucide-react"

interface AboutProps {
    dict: {
        welcome: string
        title: string
        subtitle: string
        title_2: string
        description: string
        values: {
            ethics: string
            science: string
            care: string
        }
    }
}

export function About({ dict }: AboutProps) {
    const VALUES = [
        {
            icon: Scale,
            label: dict.values.ethics,
        },
        {
            icon: FlaskConical,
            label: dict.values.science,
        },
        {
            icon: HeartHandshake,
            label: dict.values.care,
        },
    ];
    return (
        <section className="bg-white py-24 px-8 md:px-[87.5px] w-full">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
                <div className="w-full max-w-[768px] flex flex-col items-center text-center gap-[17.5px]">
                    <span className="font-bold text-sm tracking-[0.2em] text-primary uppercase">
                        {dict.welcome}
                    </span>

                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark">
                        {dict.title}
                    </h2>
                    
                    <div className="w-20 h-1 bg-primary mt-2"/>
                </div>
                <div className="w-full max-w-[896px] flex flex-col items-center text-center gap-2.5">
                    <span className="font-bold text-sm tracking-[0.1em] text-primary uppercase">
                        {dict.subtitle}
                    </span>

                    <h3 className="font-heading font-bold text-[30px] leading-9 text-dark uppercase">
                        {dict.title_2}
                    </h3>

                    <p className="font-sans font-normal text-lg leading-[29.25px] text-gray-600 text-center mt-2">
                        {dict.description}
                    </p>

                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 pt-[38.5px]">
                        {VALUES.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-[277px] h-28 p-6 rounded-2x1 bg-gray-50 border border-gray-100 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-md rounded-2xl"
                            >
                                <div className="pb-3 text-primary">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>

                                <span className="font-bold text-sm uppercase text-dark tracking-wide">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}