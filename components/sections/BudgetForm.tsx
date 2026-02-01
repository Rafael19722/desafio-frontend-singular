"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, X, FileText, Image as ImageIcon, Trash2, Send, MapPin, Phone, Mail, ClipboardList } from "lucide-react";
import { motion, AnimatePresence} from "framer-motion";
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

interface BudgetFormProps {
    dict: {
        subtitle: string
        title: string
        description: string
        form: {
            title: string
            name: string
            name_placeholder: string
            phone: string
            email: string
            email_placeholder: string
            upload_title: string
            upload_desc: string
            upload_info: string
            upload_change: string
            upload_file: string
            obs: string
            obs_placeholder: string
            submit: string
            submit_short: string
            sending: string
        },
        contact: {
            title: string
            location: string
            phone: string
            email: string
            footer_text: string
        },
        toast: {
            console: string
            sucess: string
            description: string         
        }
    }
}

const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
    phone: z.string().min(10, "Telefone inválido."),
    email: z.string().email("E-mail inválido."),
    message: z.string().optional(),
    files: z.any().optional(),
});

export function BudgetForm({ dict }: BudgetFormProps) {
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
        console.log(dict.toast.console, values);

        setTimeout(() => {
            setLoading(false);
            toast.success(dict.toast.sucess, {position: "top-center"}, {
                description: dict.toast.description,
            });
            form.reset();
        }, 2000);
    }

    const files = form.watch("files");

    const formatBytes = (bytes: number, decimals = 2) => {
        if (!+bytes) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    };

    const removeFile = (indexToRemove: number) => {
        const currentFiles = form.getValues("files") as FileList | null;
        if (!currentFiles) return;

        const dt = new DataTransfer();
        Array.from(currentFiles).forEach((file: File, i) => {
            if (i !== indexToRemove) dt.items.add(file);
        });

        form.setValue("files", dt.items.length > 0 ? dt.files : null);
    };

    return (
        <section id="budgetForm" className="bg-white py-24 px-8 md:px[87.5px] w-full">
            
            <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

                <div className="flex flex-col items-center gap-2 text-center max-w-[672px] mx-auto">
                    <span className="font-bold text-sm tracking-[1.4px] text-primary uppercase">
                        {dict.subtitle}
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark">
                        {dict.title}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mt-2">
                        {dict.description}
                    </p>
                </div>

                <div className="w-full bg-white rounded-[40px] border border-gray-200 overflow-hidden shadow-xl flex flex-col lg:flex-row">

                    <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col gap-8 bg-white">

                        <div className="flex items-center gap-2 pb-2">
                            <ClipboardList className="text-primary" size={24} />
                            <h3 className="font-heading font-bold text-2xl text-dark">{dict.form.title}</h3>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">

                                <div className="flex flex-col md:flex-row gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="flex-1">
                                                <FormLabel>{dict.form.name}</FormLabel>
                                                <FormControl>
                                                    <input placeholder={dict.form.name_placeholder} className="h-12 px-4 bg-gray-50 border-gray-200" {...field} />
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
                                                <FormLabel>{dict.form.phone}</FormLabel>
                                                <FormControl>
                                                    <input placeholder="(00) 00000-0000" className="h-12 px-4 bg-gray-50 border-gray-200" {...field}/>
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
                                            <FormLabel>{dict.form.email}</FormLabel>
                                            <FormControl>
                                                <input placeholder={dict.form.email_placeholder} className="h-12 px-4 bg-gray-50 border-gray-200" {...field}/>
                                            </FormControl>
                                            <FormMessage className="text-red-500"/>
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-2">
                                    <FormLabel>{dict.form.upload_title}</FormLabel>
                                    <label 
                                        className={`relative flex flex-col items-center justify-center w-full border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 group
                                            ${files && files.length > 0
                                                ? "h-32 border-primary/50 bg-primary/5"
                                                : "h-[180px] border-gray-200 bg-gray-50 hover:bg-gray-100"
                                        }`}
                                    
                                    >
                                        <input 
                                            type="file" 
                                            className="hidden"
                                            multiple
                                            onChange={(e) => {
                                                if(e.target.files && e.target.files.length > 0) {
                                                    form.setValue("files", e.target.files);
                                                }
                                            }}
                                        />
                                        <div className="flex flex-col items-center justify-center pt-2 md:pt-5 pb-2 md:pb-6">
                                            <div className={`transition-transform duration-300 ${files && files.length > 0 ? "scale-75" : "scale-100"}`}>
                                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Upload className="text-primary" size={24} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center px-2 md:px-4">
                                            <p className="font-semibold text-primary">
                                                {files && files.length > 0 ? dict.form.upload_change : dict.form.upload_desc}
                                            </p>
                                            {(!files || files.length === 0) && (
                                                <p className="text-xs text-gray-500 mt-1">{dict.form.upload_info}</p>
                                            )}
                                        </div>
                                    </label>

                                    <AnimatePresence>
                                        {files && files.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto"}}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-2 overflow-hidden"
                                            >
                                                <div className="flex justify-between items-center px-1">
                                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                        {dict.form.upload_file} ({files.length})
                                                    </span>
                                                    <Button
                                                        type="button"
                                                        onClick={() => form.setValue("files", null)}
                                                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                                                    >
                                                        <Trash2 size={12} />
                                                    </Button>
                                                </div>

                                                <div>
                                                    {Array.from(files).map((file: any, index: number) => (
                                                        <motion.div
                                                            key={`${file.name}-${index}`}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, scale: 0.9 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                                        >
                                                            <div className="flex items-center gap-3 overflow-hidden">
                                                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                                                    {file.type.startsWith("image/") ? (
                                                                        <ImageIcon className="text-purple-500" size={20} />
                                                                    ) : (
                                                                        <FileText className="text-blue-500" size={20} />
                                                                    )}
                                                                </div>

                                                                <div className="flex flex-col min-w-0">
                                                                    <p className="text-sm font-medium text-gray-700 truncate max-w-[200px] sm:max-w-[300px]">
                                                                        {file.name}
                                                                    </p>
                                                                    <p className="text-xs text-gray-400">
                                                                        {formatBytes(file.size)}
                                                                    </p>
                                                                </div>

                                                            </div>

                                                            <Button
                                                                type="button"
                                                                onClick={() => removeFile(index)}
                                                                className="p2 hover:bg-red-200 rounded-full text-black hover:text-red-500 transition-colors"
                                                                title="Remove file"
                                                            >
                                                                <X size={16} />
                                                            </Button>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{dict.form.obs}</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder={dict.form.obs_placeholder}
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
                                    {loading ? dict.form.sending : (
                                        <>
                                            <span className="hidden md:inline">{dict.form.submit}</span>
                                            <span className="md:hidden">{dict.form.submit_short}</span>
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
                                <h3 className="font-heading font-bold text-4xl mb-2">{dict.contact.title}</h3>

                                <div className="flex flex-col gap-8 flex-1">

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-primary/20 flex items-center justify-center shrink-0">
                                            <MapPin className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{dict.contact.location}</p>
                                            <p className="text-gray-300 text-base">Rua Fictícia 123, Zona Central. Cidade Modelo, Estado.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-primary/20 flex items-center justify-center shrink-0">
                                            <Phone className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{dict.contact.phone}</p>
                                            <p className="text-gray-300 text-base">+55 (71) 99999-9999</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl border border-white/20 bg-primary/20 flex items-center justify-center shrink-0">
                                            <Mail className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{dict.contact.email}</p>
                                            <p className="text-gray-300 text-base">contato@farmacia.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 bg-primary/10 border border-primary/20 rounded-3xl p-6 backdrop-blur-base">
                                    <p className="font-sans italic text-base text-green-200">
                                        {dict.contact.footer_text}
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
