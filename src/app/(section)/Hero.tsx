import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#080808]"
    >
      <div className="relative mt-14 flex min-h-[100vh] w-full flex-col items-center justify-center gap-3 px-3 md:mt-0 md:flex-row md:gap-0 md:px-0">
        <div className="flex flex-col items-center gap-5 md:items-start">
          <p className="text-center font-jakarta text-3xl font-[100] uppercase leading-[60px] tracking-[10px] text-[#9A9A9A] md:text-start md:text-5xl md:leading-[70px]">
            Authentic
            <br />
            South Indian
            <br /> Cuisine
          </p>
          <Button
            type="button"
            variant="outline"
            className="flex gap-3 rounded-none border border-white px-6 py-6 text-[#9A9A9A]"
          >
            <span>Order Now </span>
            <ChevronRight className="h-4 w-4 text-primary" />
          </Button>
        </div>
        <div>
          <div
            className="flex h-fit w-fit items-center justify-center rounded-full border-[0.5px] border-[#080808] p-10 md:h-[700px] md:w-[700px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(17, 17, 17, 0.10) 50%, rgba(68, 68, 68, 0.10) 179%)",
            }}
          >
            <div
              className="relative flex h-fit w-fit items-center justify-end overflow-visible rounded-full px-0 md:h-[550px] md:w-[550px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(17, 17, 17, 0.56) 50%, rgba(68, 68, 68, 0.56) 100%)",
              }}
            >
              <Image
                src="/images/home/hero/hero.png"
                width={919}
                height={678}
                alt="hero"
                className="left-20 top-16 w-[900px] overflow-visible rounded-full md:absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
