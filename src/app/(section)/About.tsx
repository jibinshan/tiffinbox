import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = ({ }) => {
    return (
        <section id="about" className="flex w-full items-center justify-center bg-[#080808]">
            <div className="relative flex max-w-[1300px] w-full px-3 md:px-0 py-12 md:py-24">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <Image
                            src='/images/home/about/about.png'
                            alt="about"
                            width={909}
                            height={900}
                            className="min-h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative w-full md:w-1/2 bg-[#fcb017] flex md:items-center justify-center p-4">
                        <div className="z-50 flex flex-col gap-4">
                            <p className="text-black font-jakarta font-[400] tracking-[4px]">ABOUT US</p>
                            <p className="text-black text-3xl md:text-4xl font-thin font-jakarta tracking-[12px] md:leading-[70px] uppercase">Experience<br /> Authentic<br /> South Indian<br /> Flavors at The<br /> Tiffin Box</p>
                            <Link href='/menu'>
                                <Button type="button" variant='outline' className="w-fit text-black bg-transparent border-black flex gap-3"><span>Order Now </span><ChevronRight className="h-4 w-4" /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default About;
