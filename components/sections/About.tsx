"use client"

import { Scale, FlaskConical, HeartHandshake } from "lucide-react"

const VALUES = [
    {
        icon: Scale,
        label: "Ética",
    },
    {
        icon: FlaskConical,
        label: "Ciência",
    },
    {
        icon: HeartHandshake,
        label: "Cuidado",
    },
];

export function About() {
    return (
        <section className="bg-white py-24 px-8 md:px-[87.5px] w-full">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
                <div className="w-full max-w-[768px] flex flex-col items-center text-center gap-[17.5px]">
                    <span className="font-bold text-sm tracking-[0.2em] text-primary uppercase">
                        Bem vindos
                    </span>

                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark">
                        A saúde como prioridade.
                    </h2>
                    
                    <div className="w-20 h-1 bg-primary mt-2"/>
                </div>
                <div className="w-full max-w-[896px] flex flex-col items-center text-center gap-2.5">
                    <span className="font-bold text-sm tracking-[0.1em] text-primary uppercase">
                        Sobre nós
                    </span>

                    <h3 className="font-heading font-bold text-[30px] leading-9 text-dark uppercase">
                        Acreditamos na busca constante pela evolução.
                    </h3>

                    <p className="font-sans font-normal text-lg leading-[29.25px] text-gray-600 text-center mt-2">
                        Seu desejo de crescer e desenvolver-se é o motor que nos impulsiona. 
                        Na Farmácia, estamos aqui para acompanhá-lo nesta jornada, para ajudá-lo 
                        a descobrir todo o seu potencial.
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