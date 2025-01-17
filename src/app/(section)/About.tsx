import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = ({}) => {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-[#080808]"
    >
      <div className="relative flex w-full max-w-[1300px] px-3 py-12 md:px-0 md:py-24">
        <div className="flex w-full flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/home/about/about.png"
              alt="about"
              width={909}
              height={900}
              className="min-h-full w-full object-cover"
            />
          </div>
          <div className="relative flex w-full justify-center bg-[#fcb017] p-4 md:w-1/2 md:items-center">
            <div className="z-50 flex flex-col gap-4">
              <p className="font-jakarta font-[400] tracking-[4px] text-black">
                ABOUT US
              </p>
              <p className="font-jakarta text-3xl font-thin uppercase tracking-[12px] text-black md:text-4xl md:leading-[70px]">
                Experience
                <br /> Authentic
                <br /> South Indian
                <br /> Flavors at The
                <br /> Tiffin Box
              </p>
              <Link href="/menu">
                <Button
                  type="button"
                  variant="outline"
                  className="flex gap-3 rounded-none border-black bg-transparent px-6 py-6 text-black"
                >
                  <span>Order Now </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
