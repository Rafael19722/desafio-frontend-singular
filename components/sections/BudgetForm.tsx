"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, Send, MapPin, Phone, Mail, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
    phone: z.string().min(10, "Telefone inválido."),
    email: z.string().email("E-mail inválido."),
    message: z.string().optional(),
    files: z.any().optional(),
});

export function BudgetForm() {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        console.log("Enviando:", values);

        setTimeout(() => {
            setLoading(false);
            toast.success("Orçamento solicitado!", {
                description: "Nossa equipe entrará em contato em breve.",
            });
            form.reset();
        }, 2000);
    }

    return (
        <section className="bg-white py-24 px-8 md:px[87.5px] w-full" id="orcamento">
            
            <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

                <div className="flex flex-col items-center gap-2 text-center max-w-[672px] mx-auto">
                    <span className="font-bold text-sm tracking-[1.4px] text-primary uppercase">
                        Orçamento Online
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark">
                        Solicitar Orçamento
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mt-2">
                        Envie-nos suas receitas (pode anexar várias) ou consulta e nossa equipe farmacêutica responderá.
                    </p>
                </div>

                <div className="w-full bg-white rounded-[40px] border border-gray-200 overflow-hidden shadow-xl flex flex-col lg:flex-row">

                    <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col gap-8 bg-white">

                        <div className="flex items-center gap-2 pb-2">
                            <ClipboardList className="text-primary" size={24} />
                            <h3 className="font-heading font-bold text-2xl text-dark">Dados do pedido</h3>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">

                                <div className="flex flex-col md:flex-row gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel>Nome completo</FormLabel>
                                                <FormControl>
                                                    <input placeholder="Seu nome" className="h-12 bg-gray-50 border-gray-200" {...field} />
                                                </FormControl>
                                                <FormMessage className="text-red-500"/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel>WhatsApp / Celular</FormLabel>
                                                <FormControl>
                                                    <input placeholder="(00) 00000-0000" className="h-12 bg-gray-50 border-gray-200" {...field}/>
                                                </FormControl>
                                                <FormMessage className="text-red-500"/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <input placeholder="seu@email.com" className="h-12 bg-gray-50 border-gray-200" {...field}/>
                                            </FormControl>
                                            <FormMessage className="text-red-500"/>
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-2">
                                    <FormLabel>Anexar Receitas</FormLabel>
                                    <div className="h-[180px] w-full border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-gray-100 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Upload className="text-primary" size={24} />
                                        </div>
                                        <div className="text-center">
                                            <p className="font-semibold text-primary">Adicionar receitas médicas</p>
                                            <p className="text-xs text-gray-500 mt-1">JPG, PNG ou PDF (Máx. 10MB)</p>
                                        </div>
                                    </div>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Observações</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Digite alguma observação sobre seu pedido..."
                                                    className="bg-gray-50 border-gray-200 min-h-[100px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="h-12 md:h-14 w-full rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold text-sm md:text-lg gap-2 md:gap-3 mt-2 uppercase transition-all"
                                >
                                    {loading ? "Enviando..." : (
                                        <>
                                            <span className="hidden md:inline">Solicitar Orçamento</span>
                                            <span className="md:hidden">Solicitar</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>

                    <div className="w-full lg:w-1/2 relative bg-gray-900 text-white p-8 md:p-16 flex flex-col justify-between">
                        
                        <div className="absolute inset-0 z-0 opacity-100">
                            <Image src="/images/bg-budget.png" alt="cartelas de remédio" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"/>
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-left">
                            <div className="w-full flex flex-col gap-8">
                                <h3 className="font-heading font-bold text-4xl mb-2">Canais de Atendimento</h3>

                                <div className="flex flex-col gap-8 flex-1">

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Localização</p>
                                            <p className="text-gray-300 text-base">Rua Fictícia 123, Zona Central. Cidade Modelo, Estado.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-primary/20 flex items-center justify-center shrink-0">
                                            <Phone className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">WhatsApp Central</p>
                                            <p className="text-gray-300 text-base">+55 (71) 99999-9999</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-primary/20 flex items-center justify-center shrink-0">
                                            <Mail className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Consultas técnicas</p>
                                            <p className="text-gray-300 text-base">contato@farmacia.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-primary/10 border border-primary/20 rounded-3xl p-6 backdrop-blur-base">
                                    <p className="font-sans italic text-base text-green-200">
                                        "Comprometidos com a ética farmacêutica e a saúde de nossos pacientes."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
