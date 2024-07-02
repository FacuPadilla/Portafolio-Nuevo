import React from "react";
import Lottie from "lottie-react";

import { SkillCard } from "./SkillCard";
import animationData from "../assets/flecha.json";

export const Skills = () => {
  return (
    <div className="mt-20" id="skills">
      <h1 className="font-robomono text-5xl lg:text-7xl text-center text-sky-600">
        My skills
      </h1>
      <div className=" text-center font-robomono flex justify-center items-center mt-10 lg:mt-32 md:gap-[100px] lg:px-20">
        <div className="hidden lg:block">
          <div className="mb-24">
            <Lottie
              animationData={animationData}
              className="h-[250px] w-[250px] "
            />
            <h1 className="text-white font-robomono text-2xl">
              These are some of my skills
            </h1>
            <img src="target.png" alt="" className="pr-2 mt-4" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-x-10 gap-y-10 ">
          <SkillCard name="React.js" src="../../public/react.svg" />
          <SkillCard name="JavaScript" src="../../public/javascript.svg" />
          <SkillCard name="Next.js" src="../../public/nextjs.svg" />
          <SkillCard name="Redux" src="../../public/redux.svg" />
          <SkillCard name="Tailwinds" src="../../public/tailwindcss.svg" />
          <SkillCard name="SQL" src="../../public/sql.svg" />
          <SkillCard name="Github" src="../../public/github.svg" />
          <SkillCard name="node.js" src="../../public/nodejs.svg" />
          <SkillCard name="Vercel" src="../../public/vercel.svg" />
        </div>
      </div>
    </div>
  );
};
