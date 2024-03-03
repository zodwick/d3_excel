"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="">
      <div className=" bg-[url('/bg/emerald.jpg')] ">
        <Navbar />

        <main className="flex min-h-screen flex-col   items-center justify-between py-24 antialiased relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl flex flex-col     mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-[#b7967a] to-[#bd926d] bg-opacity-50">
              Where your journey <br />
              to inner peace begins.
            </h1>
            <p className="mt-4 font-normal text-base text-[#acae95] max-w-xl text-center mx-auto">
              We leverage the power of AI to create a personalized yoga
              experience that caters to your unique needs and goals. Whether
              you&apos;re a seasoned yogi or a curious beginner, Unfold Yoga
              guides you on your journey to inner peace, increased flexibility,
              and a stronger you.
            </p>
            <Link
              href="/work"
              className="relative px-5 py-2 font-medium text-white group w-fit mx-auto mt-8"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-zinc-500 group-hover:bg-zinc-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-zinc-700 group-hover:bg-zinc-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-zinc-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-zinc-400 -rotate-12"></span>
              <span className="relative">Try Now</span>
            </Link>
          </div>

          <AutoplayVideo src="/bg/yoga_vid.mp4" />
        </main>
      </div>
      <div className="bg-gradient-to-b from-[#004439] to-slate-950 w-full flex justify-center flex-col ">
        <h3 className=" text-white mx-auto font-semibold font-sans text-2xl  pt-10">
          {" "}
          What we do{" "}
        </h3>
        <div className="grid grid-cols-1 gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-2  px-5  py-8 ">
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Personalized Practice</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Unfold Yoga uses AI to tailor your practice.{" "}
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                <Icon />
              </div>
            </div>
          </GlowingStarsBackgroundCard>
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Real-time Feedback</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Our AI-powered instructor provides real-time feedback on your
                form.
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                <Icon />{" "}
              </div>
            </div>
          </GlowingStarsBackgroundCard>
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Targeted Progress Tracking</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                Track your progress and receive personalized recommendations
                from AI.
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                <Icon />{" "}
              </div>
            </div>
          </GlowingStarsBackgroundCard>
          <GlowingStarsBackgroundCard>
            <GlowingStarsTitle>Boosted Motivation</GlowingStarsTitle>
            <div className="flex justify-between items-end">
              <GlowingStarsDescription>
                AI offers encouragement and suggests modifications to keep you
                motivated.
              </GlowingStarsDescription>
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                <Icon />{" "}
              </div>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

interface AutoplayVideoProps {
  src: string;
}

interface AutoplayVideoProps {
  src: string;
}

const AutoplayVideo: React.FC<AutoplayVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        // Autoplay was prevented.
        console.error("Autoplay was prevented:", error);
      });
    }

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [src]);

  return (
    <div className="  max-w-[90%] pt-20 rounded-lg ">
      <video ref={videoRef} src={src} autoPlay muted />
    </div>
  );
};
