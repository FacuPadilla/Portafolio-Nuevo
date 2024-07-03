import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/hombre.json";

export const AboutMe = () => {
  return (
    <div className="text-white text-center pt-10 mt-20" id="about">
      <p className="text-2xl font-robomono text-slate-500">Introudction</p>
      <h1 className="text-5xl lg:text-7xl font-robomono text-sky-600 ">
        Overview.
      </h1>
      <div className="lg:px-20 md:flex text-center justify-center mt-10 lg:mt-0">
        <div className="lg:w-[40%] flex relative justify-center items-center">
          <div className="font-robomono space-y-5">
            <p className="text-center lg:text-xl font-robomono">
              My name is{" "}
              <span className="text-sky-600">Facundo Jose Padilla</span>, I am
              23 years old and I am a{" "}
              <span className="text-yellow-400">Full-Stack developer</span>. I
              have worked on a variety of projects and technologies, both
              backend and frontend.
            </p>
            <p className="text-center lg:text-xl font-robomono">
              <span className="text-yellow-400">
                I am sociable and I value the company of people who enrich me
                intellectually
              </span>
              . I strive to exceed expectations in everything I do and have a
              passion for continuous learning.
            </p>
            <p className="text-center lg:text-xl font-robomono">
              I do not like to compete,{" "}
              <span className="text-yellow-400">I prefer teamwork,</span>{" "}
              believing in the importance of collaborating to achieve goals. I
              am always open to learning something new and look for
              opportunities to improve my skills.
            </p>
          </div>
        </div>
        <div className="lg:mb-32">
          <Lottie
            animationData={animationData}
            className="lg:w-[600px] lg:h-[600px] w-[250px] h-[250px] ml-8 md:ml-0"
          />
        </div>
      </div>
      <div className="flex gap-10 text-center justify-center mt-20 lg:mt-0 lg:mb-20">
        <button class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a href="FACUNDOPADILLACV.pdf" download="Facundo Padilla">
            Download CV in Spanish
          </a>
        </button>
        <button class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a href="FACUNDOPADILLACV.pdf" download="Facundo Padilla">
            Download CV in English
          </a>
        </button>
      </div>
    </div>
  );
};
