import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="mb-10 lg:mt-32 mt-20" id="projects">
      <h2 className="text-2xl font-robomono text-slate-500">
        WHAT I HAVE DONE SO FAR?
      </h2>
      <h1 className="text-5xl lg:text-7xl font-robomono text-sky-600">
        Experience & Projects.
      </h1>

      <div className=" grid lg:grid-cols-2 items-center justify-center lg:px-32 gap-10 mt-20 lg:mt-48">
        <ProjectCard
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/Screenshot%202024-05-07%20101528.png"
          title="ConnectInk"
          info="The app allows tattoo artists to showcase their art, availability, and services, while clients can explore profiles, appreciate artwork, and easily and securely book appointments."
          ico1="sql.svg"
          ico2="tailwindcss.svg"
          ico3="nextjs.svg"
          web="https://connectink.vercel.app/"
          git="https://github.com/santicasalis/ConnectInk"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/NationNav.PNG"
          title="NationNav"
          info="An app created for current country information, known for its attractive design, advanced filters, customizable activities per country, and seamless and fun user experience. "
          ico1="react.svg"
          ico2="nodejs.svg"
          ico3="redux.svg"
          git="https://github.com/FacuPadilla/PI_Countries"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/Screenshot%202024-06-11%20120304.png"
          title="Quiz App"
          info="This application is a quiz on multiple topics divided by categories with questions related to general culture.
          "
          ico1="react.svg"
          ico2="javascript.svg"
          ico3="tailwindcss.svg"
          git="https://github.com/FacuPadilla/cuestionario"
          web="https://cuestionario-lemon.vercel.app/"
        />

        <ProjectCard
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/dashb.png"
          title="Food Delivery Dashboard"
          info="100% responsive design for a possible food delivery app with a user-friendly design"
          ico1="react.svg"
          ico2="javascript.svg"
          ico3="tailwindcss.svg"
          web="https://dashboard-store-1-vert.vercel.app/"
          git="https://github.com/FacuPadilla/dashboard-store-1"
        />
      </div>
    </div>
  );
};
