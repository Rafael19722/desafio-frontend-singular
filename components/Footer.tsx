import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface FooterProps {
    dict: {
        description: string
        links: {
            links_title: string
            link_1: string
            link_2: string
            link_3: string
            link_4: string
            
        },
        copyright: string
        privacy: string
        terms: string   
    }
}

export function Footer( { dict }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 px-8 md:px-[87.5px]">
            
            <div className="max-w-[1280px] mx-auto px-8">

                <div className="border-b border-gray-800 pb-16 flex flex-col md:flex-row justify-between gap-12 md:gap-16">

                    <div className="w-full md:w-[584px] flex flex-col gap-6">

                        <Link href="/" className="font-heading text-3xl font-bold tracking-tight inline-block mb-2">
                            <span className="text-primary">FARMÁ</span>
                            <span>CIA</span>
                        </Link>

                        <p className="font-sans font-normal text-base leading-[26px] text-gray-400 max-w-md">
                            {dict.description}
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="footer-icon">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="footer-icon">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="footer-icon">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-[584px] flex justify-start md:justify-end">

                        <div className="flex flex-col gap-6">

                            <h4 className="font-bold text-lg text-white">{dict.links.links_title}</h4>

                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href="#" className="footer-link">{dict.links.link_1}</Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">{dict.links.link_2}</Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">{dict.links.link_3}</Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-link">{dict.links.link_4}</Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>{dict.copyright}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">{dict.privacy}</Link>
                        <Link href="#" className="hover:text-white">{dict.terms}</Link>
                    </div>
                </div>

            </div>

        </footer>
    )
}