"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const images = [
    "/Images/Images1.png",
    "/Images/Images2.png",
    "/Images/Images3.png",
];

export default function Images() {
    const marqueeRef = useRef(null);
    const containerRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);

    useEffect(() => {
        function updateImageWidth() {
            const containerWidth = containerRef.current?.offsetWidth || 0;
            const gap = 16;
            let columns = 2;
      if (containerWidth < 640) {
        columns = 1;
      } else if (containerWidth < 1024) {
        columns = 1.5;
      }

      const width = (containerWidth - gap * columns) / columns;
      setImageWidth(width);
        }

        updateImageWidth();
        window.addEventListener("resize", updateImageWidth);

        return () => window.removeEventListener("resize", updateImageWidth);
    }, []);

    useEffect(() => {
        if (!marqueeRef.current) return;
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 2;

        const ctx = gsap.context(() => {
            gsap.to(marquee, {
                x: -totalWidth,
                ease: "linear",
                duration: 20,
                repeat: -1,
                modifiers: {
                    x: (x) => gsap.utils.wrap(-totalWidth, 0, parseFloat(x)) + "px",
                },
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, [imageWidth]);

    return (
        <div
            ref={containerRef}
            className=" w-full mx-auto relative overflow-hidden px-4 sm:px-6"
            // style={{ maxWidth: "100%" }}
            id="gallery"
        >
            <div
                ref={marqueeRef}
                className="flex w-max gap-4"
                style={{ willChange: "transform" }}
            >
                {[...images, ...images].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`marquee-${i}`}
                        className="object-cover flex-shrink-0"
                        style={{ width: imageWidth, height: (imageWidth * 240) / 400 }}
                    />
                ))}
            </div>
            <Image
                src="/Images/Illustration2.png"
                alt="Illustration"
                width={300}
                height={300}
                className="absolute top-0 left-0  translate-y-[-60%] hidden sm:block "
            />
        </div>
    );
}
