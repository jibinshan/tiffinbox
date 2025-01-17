import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BookTable = ({ }) => {
    return (
        <section id="about" className="flex w-full items-center justify-center bg-[#080808]">
            <div className="relative flex max-w-[1300px] w-full px-3 md:px-0 py-12 md:py-24">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <Image
                            src='/images/home/book/book.png'
                            alt="hero"
                            width={870}
                            height={900}
                            className="min-h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative w-full md:w-1/2 bg-transparent flex md:items-center justify-center p-4">
                        <div className="z-50 flex flex-col gap-4">
                            <p className="text-[#FCB017] font-jakarta tracking-[5px] uppercase">book TABLE</p>
                            <p className="text-[#9A9A9A] text-3xl md:text-4xl font-jakarta uppercase md:leading-[60px] tracking-[12px]">Planning a <br />meal at The<br /> Tiffin Box?</p>
                            <p className="w-full md:w-[500px] text-[#9A9A9A] font-jakarta">Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious</p>
                            <Link href='/menu'>
                                <Button type="button" variant='outline' className="w-fit text-[#9A9A9A] bg-transparent border-[#9A9A9A] flex gap-3"><span>Book Table</span><ChevronRight className="h-4 w-4" /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default BookTable;
