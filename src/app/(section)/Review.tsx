"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect } from "react";

const Reviews = ({ }) => {
  const { reviews } = useRestaurant();
  console.log(reviews, "==review");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const splitType = document.querySelectorAll(".review-head")
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

    gsap.to('.review-underline', {
      scrollTrigger: {
        trigger: ".review-underline",
        toggleActions: "restart none none none"
      },
      scale: 1,
      duration: 1.5
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
    <section className="relative flex h-full w-full justify-center bg-transparent">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44">
        <div className="flex h-full w-full flex-col items-start justify-center gap-2 lg:gap-4">
          <p className="w-full text-center font-jakarta uppercase tracking-[5px] text-[#FCB017]">
            Reviews
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <p className="review-head font-jakarta w-full text-center text-3xl uppercase tracking-[12px] text-[#9A9A9A] md:text-4xl md:leading-[60px]">
              Hear Our Guests
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-2xl border border-[#0b0b0b] bg-[#0b0b0b] px-6 py-8 md:basis-1/3"
                  >
                    <div className="flex w-full items-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-[#FBEAD2]">{review.author_name}</p>
                        <span className="text-[#9C9995]">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Icons.star key={index} className="text-primary" />
                      ))}
                    </div>
                    <div className="">
                      <p className="text-[#FBEAD2]">{review.text}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section >
  );
};

export default Reviews;
