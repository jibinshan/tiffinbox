import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Chef = ({ }) => {
  return (
    <section
      id="chef"
      className="flex w-full flex-col items-center justify-center gap-4 bg-[#080808]"
      style={{
        backgroundImage: 'url("/images/home/chef/background.png")',
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="flex w-full items-center justify-center">
        <Image
          src="/images/home/chef/spoon.png"
          alt="hero"
          width={270}
          height={210}
          className=""
        />
      </div>
      <p className="max-w-[1300px] font-jakarta uppercase tracking-[5px] text-[#FCB017]">
        Chef
      </p>
      <p className="font-jakarta w-full text-center text-3xl uppercase tracking-[12px] text-[#9A9A9A] md:text-4xl md:leading-[60px]">
        Our brand chef
      </p>
      <div className="relative flex w-full max-w-[1300px] px-3 pb-12 pt-9 md:px-0 md:pb-24">
        <div className="relative flex w-full flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/home/chef/chef.png"
              alt="hero"
              width={639}
              height={704}
              className="min-h-full w-full object-cover"
            />
          </div>
          <div className="relative flex w-full justify-center bg-transparent p-4 md:w-1/2 md:items-center">
            <div className="z-50 flex flex-col gap-4">
              <div className="flex flex-col gap-3 md:gap-0">
                <p className="font-jakarta text-3xl uppercase tracking-[6px] text-[#9A9A9A] md:leading-[60px]">
                  Chef Jomon
                </p>
                <p className="-mt-3 w-full font-jakarta tracking-[2px] text-[#9A9A9A] md:w-[500px]">
                  senior chef at tiffin box
                </p>
              </div>
              <p className="w-full font-jakarta tracking-[2px] text-[#9A9A9A] md:w-[500px]">
                Craving your favorite South Indian dishes? Enjoy the rich,
                authentic flavors of The Tiffin Box from the comfort of your
                home. Order online for a quick and easy delivery straight to
                your doorstep. Our dishes are prepared fresh and delivered fast,
                ensuring
              </p>
              <p className="w-full font-jakarta tracking-[2px] text-[#9A9A9A] md:w-[500px]">
                Craving your favorite South Indian dishes? Enjoy the rich,
                authentic flavors of The Tiffin Box from the comfort of your
                home. Order online for a quick and easy delivery straight to
                your doorstep.
              </p>
            </div>
          </div>
          <p
            style={{ fontFamily: "Vladimir Script" }}
            className="-bottom-6 left-[600px] hidden text-6xl font-[300] italic tracking-[2px] text-[#D3D3D3] md:absolute md:flex"
          >
            Chef
            <br />
            Jomon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chef;
