import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BookTable = ({}) => {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-[#080808]"
    >
      <div className="relative flex w-full max-w-[1300px] px-3 py-12 md:px-0 md:py-24">
        <div className="flex w-full flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/home/book/book.png"
              alt="hero"
              width={870}
              height={900}
              className="min-h-full w-full object-cover"
            />
          </div>
          <div className="relative flex w-full justify-center bg-transparent p-4 md:w-1/2 md:items-center">
            <div className="z-50 flex flex-col gap-4">
              <p className="font-jakarta uppercase tracking-[5px] text-[#FCB017]">
                book TABLE
              </p>
              <p className="w-full max-w-[400px] font-jakarta text-3xl uppercase tracking-[6px] text-[#9A9A9A] md:text-4xl md:leading-[60px] md:tracking-[12px]">
                Planning a meal at The Tiffin Box?
              </p>
              <p className="w-full font-jakarta text-[#9A9A9A] md:w-[500px]">
                Craving your favorite South Indian dishes? Enjoy the rich,
                authentic flavors of The Tiffin Box from the comfort of your
                home. Order online for a quick and easy delivery straight to
                your doorstep. Our dishes are prepared fresh and delivered fast,
                ensuring a delicious
              </p>
              <Link href="/menu">
                <Button
                  type="button"
                  variant="outline"
                  className="flex gap-3 rounded-none border-[#9A9A9A] bg-transparent px-6 py-6 text-[#9A9A9A]"
                >
                  <span>Book Table</span>
                  <ChevronRight className="h-4 w-4 text-primary" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
