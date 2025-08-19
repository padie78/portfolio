"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >

      <div className="h-full w-full flex flex-col gap-5 mt-10 justify-center m-auto text-start">


 <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, ease: 'easeOut' }}
  className="text-3xl md:text-6xl font-bold text-white"
>
  Hi! I am{' '}
  <span className="text-[rgba(0,255,0,1)]">
    <Typewriter
      words={['Creative', 'Curious', 'Motivated', 'Proactive', 'Tech lover', 'Cooperative', 'Analytical', 'Developer']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={100}
      deleteSpeed={60}
      delaySpeed={2000}
    />
  </span>
</motion.h1>



        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          {"Hey! I'm Diego Liascovich, a Full Stack Software Engineer who loves turning ideas into sleek web, mobile, and software experiences. Take a look at my projects and skills."}
        </motion.p>
        <motion.a
          href="/resume/Resume-Diego-Liascovich.pdf"
          target="_blank"
          rel="noreferrer noopener"
          variants={slideInFromLeft(1)}
          className="py-2 px-6 text-center cursor-pointer rounded-lg max-w-[200px]
             shadow-md hover:shadow-green-400/60
             hover:scale-105 hover:brightness-110
             transition-all duration-300 ease-in-out
             font-bold"
          style={{ backgroundColor: "rgba(0,255,0,0.8)", color: "black" }}
        >
          My Resume
        </motion.a>




      </div>

      {/* Imagen del programador estilo cómic */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-[600px] h-auto flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/me.png"
          alt="Hero Image"
          width={500}
          height={500}
          priority
          className="object-contain w-full max-w-[500px] md:max-w-[600px] h-auto select-none"
        />
      </motion.div>
    </motion.div>
  );
};
