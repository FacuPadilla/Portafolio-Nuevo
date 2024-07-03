import React from "react";
import { AboutMe } from "./AboutMe";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { IoIosMail } from "react-icons/io";

import Typed from "typed.js";

import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Contact } from "./Contact";

export const Landing = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Facundo Jose Padilla"],
      typeSpeed: 80,
      showCursor: true,
      startDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const [loaded, setLoaded] = useState(false);

  // Animación para el nombre
  const nameAnimation = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 600 },
  });

  useEffect(() => {
    // Simula un tiempo de carga, por ejemplo 1 segundo
    setTimeout(() => {
      setLoaded(true);
    }, 500); // Ajusta este tiempo según tus necesidades
  }, []);
  return (
    <div
      className="pt-20 px-10 grid items-center justify-center text-center"
      id="landing"
    >
      <h1 className="text-slate-300 text-3xl font-bold tracking-widest leading-10">
        Hi, I am
      </h1>
      <div className="my-4 text-sky-600 text-5xl">
        <span ref={el} className="text-sky-600 font-robomono text-5xl  " />
      </div>
      {/* <animated.p
        style={nameAnimation}
        className="py-2 text-5xl font-robomono text-sky-600"
      >
        Facundo Jose Padilla
      </animated.p> */}
      <p className="text-4xl font-robomono text-slate-500">
        Fullstack Developer
      </p>
      <div className="flex items-center justify-center mt-4">
        <img
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/perfilCV.jpeg"
          className="w-[200px] h-[200px] rounded-full object-cover "
        ></img>
      </div>
      <p class="mt-5 font-robomono text-lg md:text-xl text-white">
        I am a software engineer who specializes in designing and developing
        exceptional WEB applications.
      </p>
      <div className="py-6 flex lg:gap-3 items-center justify-center">
        <a href="" className="pr-2 text-4xl text-sky-600">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/facu_padilla/?next=%2F"
          className="pr-2 text-4xl text-sky-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-padilla-60371b26a"
          className="pr-2 text-4xl text-sky-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FacuPadilla"
          className="pr-2 text-4xl text-sky-600"
        >
          <FaGithub />
        </a>
      </div>
      <div className=" space-x-1 flex  items-center justify-center " href="">
        <IoIosMail className="text-sky-600 text-2xl " />
        <span className="text-lg text-white hover:text-sky-600 ">
          facupadilla1904@gmail.com
        </span>
      </div>

      <div className="font-robomono mt-10 flex text-center justify-center  md:space-x-10 space-x-4  ">
        <img
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/spainFlag.png"
          alt=""
          width={"50px"}
        />
        <p className="font-bold my-3 mx-2  text-sm text-white">
          Spanish(Native)
        </p>
        <img
          src="https://raw.githubusercontent.com/FacuPadilla/MiPortafolio/main/src/img/ukFlag.png"
          alt=""
          width={"50px"}
        />
        <p className="font-bold my-3 mx-2 text-sm text-white">
          English(Advanced)
        </p>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
