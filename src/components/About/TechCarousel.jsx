"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { aboutTranslations } from "../../constants/i18nConstants/aboutTranslations.js";
import { useTranslation } from "react-i18next";

export function TechCarousel({ images = [], className = "" }) {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const aboutData = aboutTranslations[lang] || aboutTranslations.en;


  const autoplayRef = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const [carouselApi, setCarouselApi] = React.useState(null);

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-foreground">
        {aboutData.tech}
        </h3>
      </div>

      <Carousel
        opts={{
          loop: true,
          align: "start", 
          containScroll: "trimSnaps",
          slidesToScroll: 1,
        }}
        plugins={[autoplayRef.current]}
        setApi={setCarouselApi}
        onMouseEnter={() => autoplayRef.current.stop()}
        onMouseLeave={() => autoplayRef.current.play()}
      >
        <CarouselContent className="gap-4 px-4 md:px-8 mt-4">
          {images.map((src, i) => (
            <CarouselItem
              key={i}
              className="
                flex justify-center items-center
                basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5
              "
            >
              <div className="bg-white rounded-lg p-6 shadow-[0_4px_15px_rgba(236,72,153,0.5)] flex items-center justify-center w-32 md:w-36 lg:w-40 ">
                <img
                  src={src}
                  alt={`Tech logo ${i}`}
                  className="h-12 md:h-16 lg:h-20 object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
