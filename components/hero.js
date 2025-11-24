import React from  "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
    return (
      <BackgroundBeamsWithCollision>
      <h2 className="text-l relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight flex flex-col justify-center items-center px-4 md:px-0 md:leading-snug leading-snug max-w-3xl mx-auto py-20">
         <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80 mb-5">
            Transforming ideas into clean, practical solutions.
          </p>
        Final-year CSE student and full-stack developer passionate about scalable apps, cloud deployment, and practical AI/ML.{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-5xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] mt-5">
            <span className="">Hi! I,m Lipsa Das.</span>
          </div>
          <div className="relative text-5xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 mt-5">
            <span className="">Hi! I,m Lipsa Das.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
   
    );
}