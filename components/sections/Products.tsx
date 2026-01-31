import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCT_LIST = [
    {
        id: 1,
        image: "/images/medicine-1.png",
        category: "Imunidade",
        name: "Wellmunep",
        description: "Reforço imunológico de alta absorção para o dia a dia.",
    },
    {
        id: 2,
        image: "/images/medicine-2.png",
        category: "Digestão",
        name: "AdiDAO",
        description: "Enzima específica para a degradação eficiente de histamina."
    },
    {
        id: 3,
        image: "/images/medicine-3.png",
        category: "Enzimas",
        name: "Fórmulas Magistrais",
        description: "Sua prescrição médica tornada realidade com precisão exata.",
    },
    {
        id: 4,
        image: "/images/medicine-2.png",
        category: "Personalizado",
        name: "Suplementos Esportivos",
        description: "Otimização do rendimento físico personalizada.",
    },
];

export function Products() {
    return (
        <section className="bg-white py-24 w-full flex-col gap-12 overflow-hidden">
            
            <div className="w-full max-w-[1280px] mx-auto mb-[48px] px-8 flex flex-col md:flex-row items-end justify-between gap-8">
                
                <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-sm tracking-[0.1em] text-primary uppercase">
                        Produtos
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark leading-tight">
                        Os mais pedidos
                    </h2>
                </div>

                <Button variant="ghost" className="group flex items-center gap-2 text-dark hover:text-primary transition-colors pb-2">
                    <span className="font-semibold text-base">Ver todos os produtos</span>
                    <ArrowRight size={20} className="text-primary transition-transform group-hover:translate-x-1" />
                </Button>

            </div>

            <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
                
                <div className="flex gap-8 w-max px-8 md:px-[72.75px]">
                    {PRODUCT_LIST.map((product) => (
                        <div 
                            key={product.id}
                            className="w-[320px] md:w-[400px] h-[635px] shrink-0 rounded-[40px] overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-transparent hover:border-gray-100"
                        >
                            <div className="relative w-full h-[450px] bg-gray-200 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <Image src={product.image} alt="Remédios mais vendidos" fill className="object-cover" />
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