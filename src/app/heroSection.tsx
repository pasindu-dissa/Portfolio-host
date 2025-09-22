"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../app/assets/me.png"; // Adjust path as needed
import { useMediaQuery } from "@/hooks/useMediaQuery"; // Import the custom hook
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const MOBILE_BREAKPOINT = "(max-width: 448px)";
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const FADE_DISTANCE = 400;
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / FADE_DISTANCE);
      setOpacity(newOpacity);
    };

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setOpacity(1);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]);

  return (
    <section id="home">
      <div
        className="flex justify-between mobile:max-mobileLg:justify-end
                   mobile:max-mobileLg:h-220 mobile:max-mobileLg:bg-fixed
                   mobile:max-mobileLg:bg-[url(./assets/me.png)] mobile:max-mobileLg:bg-cover 
                   mobile:max-mobileLg:bg-center mobile:max-mobileLg:bg-no-repeat
                   tab:max-laptop:block"
      >
        {/* Background Pattern */}
        <div
          className={cn(
            "mobile:max-mobileLg:hidden",
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="mobile:max-mobileLg:hidden pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        
        {/* IMAGE */}
        <Image
          src={profileImg}
          alt="A vibrant, modern portrait of Pasindu, a developer and designer"
          className="mobile:max-mobileLg:hidden
                     mobileLg:max-tab:w-100 mobileLg:max-tab:h-101 mobileLg:max-tab:relative mobileLg:max-tab:right-35
                     tab:max-laptop:w-110 tab:max-laptop:h-111 tab:max-laptop:relative tab:max-laptop:right-40
                     medium:max-lg:w-110 medium:max-lg:h-111 medium:max-lg:relative medium:max-lg:right-10
                     lg:max-laptop:w-110 lg:max-laptop:h-111 lg:max-laptop:relative lg:max-laptop:right-0
                     laptop:w-130 laptop:h-131 mobile:max-mobileLg:z-1 z-10"
          priority
        />

        {/* BACKDROP */}
        <div
          style={{ opacity }}
          className="absolute top-0 right-0 w-full h-[150%] mobile:max-mobileLg:backdrop-brightness-50 mobile:max-mobileLg:z-2"
        ></div>

        {/* ABOUT-ME */}
        <div
          style={{ opacity }}
          className="flex flex-col items-end
                     gap-5
                     laptop:gap-8
                     mobile:max-mobileLg:px-5
                     mobileLg:max-tab:absolute mobileLg:max-tab:top-25 mobileLg:max-tab:right-5 mobileLg:max-tab:w-3/5
                     tab:max-laptop:absolute tab:max-laptop:top-25 tab:max-laptop:right-15 tab:max-laptop:w-3/5
                     transition-opacity duration-300
                     mobile:max-mobileLg:z-3 z-10"
        >
          <div
            className="pt-3 text-right font-antonio font-light
             mobile:max-mobileLg:text-white 
             mobile:max-mobileLg:text-[85px] mobile:max-mobileLg:leading-22
             mobile:text-[60px] mobile:leading-13.5 mobile:pb-2
             tab:text-[70px] tab:leading-17
             laptop:text-[85px] laptop:pt-8 laptop:pb-2 laptop:leading-20
             tracking-tight bg-gradient-to-b from-white to-neutral-600 inline-block text-transparent bg-clip-text"
          >
            <span className="mobile:max-mobileLg:text-[60px] mobile:text-[40px] tab:text-[50px] laptop:text-[70px]">
              I&apos;m
            </span>
            <span className="mobile:max-mobileLg:text-[70px] mobile:text-[50px] tab:text-[60px] laptop:text-[80px]">
              {" "}
              Pasindu
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "FULL-STACK",
                2000,
                "MOBILE",
                2000,
                "WEB",
                2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              cursor={true}
              className=" text-neutral-300 mobile:max-mobileLg:text-[60px] mobile:text-[42px] tab:text-[52px] laptop:text-[62px]"
              style={{ caretColor: "#8B5CF6" }}
            />
            <br className="min-[640px]:hidden" />
            <b className="font-extrabold"> DEVELOPER</b>
            <br />&
            <span className="mobile:max-mobileLg:text-[65px] mobile:text-[42px] tab:text-[52px] laptop:text-[62px]">
              {" "}
              creative
            </span>
            <br />
            <b className="font-extrabold">DESIGNER</b>
          </div>
          <div className="flex text-3xl gap-4">
            <a
              href="https://www.linkedin.com/in/pasindu-dissa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Pasindu's LinkedIn profile"
            >
              <FaLinkedinIn className="cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
            </a>
            <a
              href="https://github.com/pasindu-dissa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Pasindu's GitHub profile"
            >
              <FaGithub className="cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Pasindu's Facebook profile"
            >
              <FaFacebook className="cursor-pointer opacity-50 transition delay-50 duration-200 ease-in-out hover:opacity-100" />
            </a>
          </div>
          <div>
            <a
              href="/CV.pdf"
              target="_blank"
              aria-label="Download Pasindu's resume"
              className="font-poppins font-medium text-[19px] p-1 mobile:max-mobileLg:py-0.25 
                         bg-white text-black border-2 border-white
                         cursor-pointer transition delay-50 duration-200 ease-in-out
                         hover:bg-black hover:text-white hover:border-2"
            >
              my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
