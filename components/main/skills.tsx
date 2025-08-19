"use client";

import React, { useState, useEffect } from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { motion } from "framer-motion";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  DATABASE_SKILL,
  CLOUD_SKILL,
  DEVOPS_SKILL,
  LANGUAJES_SKILL,
  TOOLS_SKILL,
} from "@/constants";

type CategoryKey =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "Devops"
  | "Languajes"
  | "Tools";

const categoryMap: Record<
  CategoryKey,
  ReadonlyArray<{
    skill_name: string;
    image: string;
    width: number;
    height: number;
  }>
> = {
  Frontend: FRONTEND_SKILL,
  Backend: BACKEND_SKILL,
  Database: DATABASE_SKILL,
  Cloud: CLOUD_SKILL,
  Devops: DEVOPS_SKILL,
  Languajes: LANGUAJES_SKILL,
  Tools: TOOLS_SKILL,
};

const categoryDescriptions: Record<CategoryKey, string> = {
  Frontend:
    "Technologies and frameworks focused on creating responsive, user-friendly interfaces and enriching user experiences in web and mobile applications.",
  Backend:
    "Server-side technologies that handle business logic, data processing, and API integrations to power applications efficiently and securely.",
  Database:
    "Systems and tools used for storing, retrieving, and managing structured and unstructured data, ensuring data integrity and scalability.",
  Cloud:
    "Cloud platforms and services that provide scalable infrastructure, deployment, and management solutions for modern applications.",
  Devops:
    "Tools and practices that enable continuous integration, delivery, and infrastructure automation to improve software development lifecycle efficiency.",
  Languajes:
    "Programming languages and syntaxes used to build applications, scripts, and tools across frontend, backend, and other domains.",
  Tools:
    "Various utilities, editors, version control systems, and productivity software that support development and deployment workflows.",
};

export const Skills = () => {
  const categories: CategoryKey[] = [
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "Devops",
    "Languajes",
    "Tools",
  ];
  const [activeTab, setActiveTab] = useState<CategoryKey>("Frontend");
  const [animating, setAnimating] = useState(false);

  const [textVisible, setTextVisible] = useState(true);
  const [textToShow, setTextToShow] = useState(categoryDescriptions[activeTab]);

  const [visibleCount, setVisibleCount] = useState(0);

  const handleTabClick = (category: CategoryKey) => {
    if (category === activeTab || animating) return;

    setAnimating(true);
    setTextVisible(false);
    setVisibleCount(0);

    setTimeout(() => {
      setActiveTab(category);
      setTextToShow(categoryDescriptions[category]);
      setTextVisible(true);
    }, 400);

    setTimeout(() => {
      setAnimating(false);
    }, 1100);
  };

  useEffect(() => {
    if (animating) return;
    if (!categoryMap[activeTab] || categoryMap[activeTab].length === 0) return;

    setVisibleCount(1);
    let count = 1;

    const interval = setInterval(() => {
      count++;
      if (count > categoryMap[activeTab].length) {
        clearInterval(interval);
      } else {
        setVisibleCount(count);
      }
    }, 900);

    return () => clearInterval(interval);
  }, [activeTab, animating]);

  const buttonBaseClasses =
  "py-2 px-4 text-center text-black cursor-pointer rounded-lg shadow-md transition-all duration-300 ease-in-out";

const buttonHoverClasses =
  "hover:shadow-green-400/60 hover:scale-105 hover:brightness-110";

  return (
    <section
      id="stack"
      className="flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden py-10 bg-transparent"
    >
      <h1 className="text-[40px] font-semibold text-white">
        Tech Stack
      </h1>
      {/* Tabs */}
      <div className="relative z-10 flex flex-wrap justify-center w-full max-w-4xl gap-4 px-10 py-5 select-none">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`${buttonBaseClasses} ${activeTab === category ? "shadow-green-400/90" : "opacity-70"} ${buttonHoverClasses} min-w-[80px] font-bold`}
            type="button"
            disabled={animating}
            aria-pressed={activeTab === category}
            style={{ backgroundColor: "rgba(0,255,0,1)" }}
          >
            {category}
          </button>


        ))}
      </div>

      {/* Descripción */}
      <div
        className={`max-w-4xl mb-8 px-6 text-center text-white text-lg italic select-none transition-opacity duration-500 ease-in-out`}
        style={{
          opacity: textVisible ? 1 : 0,
        }}
      >
        {textToShow}
      </div>

      {/* Iconos con animación + blur */}
      <div
        className={`flex flex-wrap justify-center gap-x-6 gap-y-0 md:gap-y-4 max-w-6xl px-4 z-10 relative transition-opacity`}
        style={{
          opacity: animating ? 0.1 : 1,
          transition: "opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        {categoryMap[activeTab]
          .slice(0, visibleCount)
          .map((skill, i) => (
            <motion.div
              key={skill.skill_name}
              initial={{ opacity: 0, y: 30, scale: 0.7, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 0.7, filter: "blur(0px)" }}
              transition={{
                delay: i * 0.15,
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <SkillDataProvider
                src={skill.image}
                name={skill.skill_name}
                width={Math.round(skill.width * 1)}
                height={Math.round(skill.height * 1)}
                index={i}
              />
              <span className="mt-0.5 text-white text-sm opacity-80 md:mt-1">
                {skill.skill_name}
              </span>
            </motion.div>
          ))}
      </div>

      {/* Fondo video */}
      <div className="w-full h-full absolute inset-0 z-0 opacity-30 flex items-center justify-center bg-cover pointer-events-none">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

