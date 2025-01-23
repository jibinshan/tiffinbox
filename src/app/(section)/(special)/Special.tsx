"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect } from "react";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({ }) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to('.special-description', {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none"
        },
        x: 0,
      }
      )
    })

    mm.add("(min-width:691px)", () => {
      gsap.to('.special-description', {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none"
        },
        x: 30,
        duration: 2
      }
      )
    })

    gsap.to('.special-title', {
      scrollTrigger: {
        trigger: ".special-title",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5

    })

    const splitType = document.querySelectorAll(".special-head")
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
          stagger: 0.2
        })
      }
    })



    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, [])
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070707] overflow-x-hidden">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <h3 className="special-title uppercase -ml-[50px] font-jakarta text-[#FCB017] tracking-[6px]">Featured Menu</h3>
        <h1 className="special-head max-w-[400px] md:max-w-[650px] text-center text-2xl md:text-5xl font-jakarta uppercase text-[#9A9A9A] md:tracking-[7px] md:leading-[60px]">
          Discover our most popular dishes
        </h1>
        {/* <p className="special-description max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0 md:-ml-[50px] font-jakarta">
          We bring the finest cuts of beef to Tiffin Box with a commitment to quality and sustainability. Embracing the city`s vibrant culinary heritage, each dish reflects our dedication to responsible sourcing. Experience dining that honors both our guests and the environment.
        </p> */}
        {modelData && (
          <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Special;
