import Image from "next/image";
import { Check, Play } from "lucide-react";

interface ProcessProps {
    subtitle: string
    title: string
    description: string
    video_btn: string
    list: {
        item_1: string
        item_2: string
        item_3: string
        item_4: string
    }   
}

export function Process({ dict }: ProcessProps) {

    const BENEFITS = [
        dict.list.item_1,
        dict.list.item_2,
        dict.list.item_3,
        dict.list.item_4
    ];

    return (
        <section id="process" className="relative bg-dark py-24 px-8 md:px-[119.5px] w-full overflow-hidden z-0">

            <div className="absolute -right-20 top-120 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[80px] -z-10" />

            <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row items-center gap-16">
                
                <div className="w-full md:w-[576px] flex flex-col gap-[17.5px]">
                    <span className="font-bold text-sm tracking-[0.1em] text-primary uppercase">
                        {dict.subtitle}
                    </span>

                    <h2 className="font-heading font-bold text-6xl md:text-5x1 text-white leading-tight">
                        {dict.title}
                    </h2>

                    <div className="pt-[14.5px]">
                        <p className="font-sans font-normal text-xl leading-[29.25px] text-gray-400">
                            {dict.description}
                        </p>
                    </div>

                    <ul className="flex flex-col gap-4 pt-[14.5px]">
                        {BENEFITS.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                                <span className="font-sans text-lg leading-6 text-gray-300">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-[576px] h-[324px] relative group cursor-pointer">
                        <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-gray-200 shadow-xl bg-gray-100">
                            <div className="absolute inset-0 bg-gray-300">
                                <Image src="/images/video-example.png" alt="Vídeo Institucional" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority/>
                            </div>

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transotion-all" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                                <Play size={32} className="text-white fill-white ml-1" />
                            </div>
                            <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                <span className="font-normal text-sm text-white">
                                    {dict.video_btn}
                                </span>
                            </div>
                        </div>

                        <div className="absolute -inset-4 bg-primary/20 rounded-[32px] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
        </section>
    )
}