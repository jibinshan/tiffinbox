import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <section className="flex h-full w-full items-center justify-center bg-[#000000] px-4 py-8 lg:px-[80px] xl:px-[120px]">
      <div className="flex flex-col gap-8 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
          <Image
            src="/images/logo.png"
            width={86}
            height={106}
            alt="hero"
            className=""
          />
          <Image
            src="/images/halal.jpg"
            width={90}
            height={90}
            alt="hero"
            className=""
          />
          {/* <h3 className="w-full max-w-[360px] text-center font-jakarta text-lg font-[300] uppercase leading-[40px] tracking-[12px] text-[#9a9a9a] lg:text-xl">
            Subscribe to our newsletter
          </h3>
          <div className="flex gap-4 lg:flex-row">
            <input
              type="text"
              placeholder="Email Address"
              className="w-[150px] border-b-2 border-[#757575] bg-black pb-2 font-jakarta text-[9px] font-[300] uppercase leading-[22px] tracking-[4px] text-[#757575] lg:w-[230px]"
            />
            <Button className="flex gap-4 rounded-none border border-white bg-black py-6 pl-5 pr-2 text-[#9a9a9a] hover:text-black">
              Subscribe <ChevronRight className="text-primary" />
            </Button>
          </div> */}
        </div>
        <div className="flex flex-col items-start justify-start gap-6 lg:flex-row lg:gap-28">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-jakarta text-sm font-[600] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-base">
              Contact US
            </p>
            <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm">
              0151 245 1500
            </p>
            <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm">
              Info@tiffinbox.co.uk
            </p>
            <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm">
              {" "}
              Allerton Rd, Liverpool L25 7RE
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <p className="font-jakarta text-sm font-[600] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-base">
              Opening hours
            </p>
            <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm">
              Tuesday-Friday : 17:00-00:00
            </p>
            <div className="flex flex-row gap-2">
              <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm">
                Saturday-Sunday :
              </p>
              <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm lg:leading-[30px]">
                13:00-16:00 <br /> (Lunch) <br /> 17:00-00:00
              </p>
            </div>
            <p className="font-jakarta text-xs font-[400] uppercase leading-[28px] tracking-[4px] text-[#9a9a9a] lg:text-sm">
              Monday : Closed
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-row items-center justify-center gap-6">
            <Link
              href={"#"}
              className="font-jakarta text-xs font-[400] uppercase leading-[25px] tracking-[4px] text-[#9a9a9a]"
            >
              Menu
            </Link>
            <hr className="hidden h-4 w-[2px] bg-[#9a9a9a] lg:block" />
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <Link
              href={"#"}
              className="font-jakarta text-xs font-[400] uppercase leading-[25px] tracking-[4px] text-[#9a9a9a] lg:pl-3"
            >
              Order Online
            </Link>
            <hr className="hidden h-4 w-[2px] bg-[#9a9a9a] lg:block" />
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <Link
              href="/table-booking"
              className="font-jakarta text-xs font-[400] uppercase leading-[25px] tracking-[4px] text-[#9a9a9a] lg:pl-3"
            >
              Book a Table
            </Link>
            <hr className="hidden h-4 w-[2px] bg-[#9a9a9a] lg:block" />
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <Link
              href="/about-us"
              className="font-jakarta text-xs font-[400] uppercase leading-[25px] tracking-[4px] text-[#9a9a9a] lg:pl-3"
            >
              About Us
            </Link>
            <hr className="hidden h-4 w-[2px] bg-[#9a9a9a] lg:block" />
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <Link
              href={"#"}
              className="font-jakarta text-xs font-[400] uppercase leading-[25px] tracking-[4px] text-[#9a9a9a]"
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
