import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Chef = ({ }) => {
    return (
        <section id="chef" className="flex flex-col gap-4 w-full items-center justify-center bg-[#080808]"
            style={{
                backgroundImage: 'url("/images/home/chef/background.png")',
                backgroundPosition: 'bottom left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
            }}
        >
            <div className="w-full flex justify-center items-center">
                <Image
                    src='/images/home/chef/spoon.png'
                    alt="hero"
                    width={270}
                    height={210}
                    className=""
                />
            </div>
            <p className="text-[#FCB017] max-w-[1300px] font-jakarta tracking-[5px] uppercase">Chef</p>
            <p className="text-[#9A9A9A] text-3xl md:text-4xl font-jakarta uppercase md:leading-[60px] tracking-[12px]">Our brand chef</p>
            <div className="relative flex max-w-[1300px] w-full px-3 md:px-0 pb-12 pt-9 md:pb-24">
                <div className="relative w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <Image
                            src='/images/home/chef/chef.png'
                            alt="hero"
                            width={639}
                            height={704}
                            className="min-h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative w-full md:w-1/2 bg-transparent flex md:items-center justify-center p-4">
                        <div className="z-50 flex flex-col gap-4">
                            <div className="flex flex-col gap-0">
                                <p className="text-[#9A9A9A] text-3xl font-jakarta uppercase md:leading-[60px] tracking-[6px]">Chef Jomon</p>
                                <p className="w-full md:w-[500px] text-[#9A9A9A] font-jakarta -mt-3 tracking-[2px]">senior chef at tiffin box</p>
                            </div>
                            <p className="w-full md:w-[500px] text-[#9A9A9A] font-jakarta tracking-[2px]">Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring</p>
                            <p className="w-full md:w-[500px] text-[#9A9A9A] font-jakarta tracking-[2px]">Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep.</p>
                        </div>
                    </div>
                    <p className="hidden md:absolute md:flex bottom-0 left-[600px] text-[#D3D3D3] font-vladimir text-5xl font-semibold">Chef<br />
                        Jomon.</p>
                </div>
            </div >
        </section >
    );
};

export default Chef;