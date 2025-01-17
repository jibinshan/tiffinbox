import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = ({ }) => {
    return (
        <section id="hero" className="flex w-full items-center justify-center bg-[#080808]">
            <div className="relative flex flex-col gap-3 md:gap-0 md:flex-row min-h-[100vh] w-full items-center justify-center px-3 md:px-0 mt-14 md:mt-0">
                <div className="flex flex-col gap-5 items-center md:items-start">
                    <p className="font-jakarta text-[#9A9A9A] font-[300] text-3xl md:text-5xl uppercase leading-[60px] tracking-[10px] text-center md:text-start">Authentic<br />
                        South Indian<br /> Cuisine</p>
                    <Button type="button" variant='outline' className="w-fit text-[#9A9A9A] border-[#9A9A9A] flex gap-3"><span>Order Now </span><ChevronRight className="h-4 w-4" /></Button>
                </div>
                <div>
                    <div className="rounded-full w-fit h-fit md:w-[700px] md:h-[700px] flex justify-center items-center p-10 border-[#080808] border-[0.5px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(17, 17, 17, 0.10) 50%, rgba(68, 68, 68, 0.10) 179%)"
                        }}
                    >
                        <div className="relative w-fit h-fit md:w-[550px] md:h-[550px] px-0 rounded-full flex items-center justify-end overflow-visible"
                            style={{
                                background: "linear-gradient(90deg, rgba(17, 17, 17, 0.56) 50%, rgba(68, 68, 68, 0.56) 100%)"
                            }}
                        >
                            <Image
                                src="/images/home/hero/hero.png"
                                width={919}
                                height={678}
                                alt="hero"
                                className="md:absolute w-[900px] left-20 top-16 rounded-full overflow-visible"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
