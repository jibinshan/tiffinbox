'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';

const ConnectWithUs = ({ }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to('.connect-one', {
        scrollTrigger: {
          trigger: ".connect-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        opacity: 1,
        duration: 1

      })

    })

    mm.add("(min-width:501px)", () => {
      gsap.to('.connect-one', {
        scrollTrigger: {
          trigger: ".connect-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        opacity: 1,
        duration: 1

      })
    })


    const splitType = document.querySelectorAll(".head-connect")
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
          },
          opacity: 0.2,
          stagger: 0.4
        })
      }
    })

  }, [])
  return (
    <section
      id="connect"
      className="relative flex w-full items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute left-6/12 top-5/12 flex items-center justify-center w-full h-full overflow-hidden z-10"
      // style={{
      //   borderRadius: '1533px',
      //   background: 'radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.14) 0%, rgba(0, 0, 0, 0.00) 100%)',
      //   filter: 'blur(67px)',
      // }}
      >
      </div>
      <div className="max-w-[1300px] px-4 py-12 lg:px-0 lg:py-24">
        <Carousel
          opts={{
            align: "start",
          }}
          className="flex w-full flex-col gap-14"
        >
          <div className="flex w-full flex-col items-center justify-center lg:flex-row">

            <div className="flex flex-col gap-4">
              <p className="connect-one text-center font-jakarta text-[#FCB017] font-light md:-ml-[50px] uppercase">
                Instagram
              </p>
              <p className="head-connect text-center text-5xl font-inter font-light uppercase text-[#9A9A9A] md:tracking-[20px] md:leading-[60px]">
                JOIN our<br /> community
              </p>
            </div>
            {/* <div className="mt-10 flex items-center gap-7">
              <CarouselPrevious className="static" variant="ghost" />
              <CarouselNext className="static" />
            </div> */}
          </div>
          <CarouselContent className="z-40">
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Image
                  src="/images/home/connect/image.png"
                  width={370}
                  height={385}
                  alt="alt"
                  className="max-h-[250px] lg:max-h-[400px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Image
                  src="/images/home/connect/image2.png"
                  width={370}
                  height={385}
                  alt="alt"
                  className="max-h-[250px] lg:max-h-[400px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Image
                  src="/images/home/connect/image3.png"
                  width={370}
                  height={385}
                  alt="alt"
                  className="max-h-[250px] lg:max-h-[400px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Image
                  src="/images/home/connect/image4.png"
                  width={370}
                  height={385}
                  alt="alt"
                  className="max-h-[250px] lg:max-h-[400px]"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ConnectWithUs;
