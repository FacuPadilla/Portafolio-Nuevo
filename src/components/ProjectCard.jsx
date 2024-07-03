import React from "react";
import { useState } from "react";

export const ProjectCard = ({
  src,
  title,
  info,
  ico1,
  ico2,
  ico3,
  git,
  web,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="bg-slate-800 border rounded-xl  opacity-80 hover:opacity-100 hover:scale-105 transition-all relative">
        <div className="flex relative w-full rounded-t-xl">
          <div className="w-[50%]">
            <img
              class="size-full  object-cover"
              src={src}
              alt="Image Description"
            />
          </div>
          <div className="w-[50%]">
            <div class="p-4 flex flex-col h-full sm:p-7">
              <h3 class="text-lg font-bold text-sky-600">{title}</h3>
              <p class="mt-1 text-white">{info}</p>
              <div class="mt-5 sm:mt-auto flex items-center justify-center pt-5 gap-6">
                <img src={ico1} alt="" className="w-[30px] h-[30px] " />
                <img src={ico2} alt="" className="w-[30px] h-[30px]" />
                <img src={ico3} alt="" className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] mt-2 flex items-center justify-center gap-4 p-2">
          <a
            href={git}
            className="flex bg-slate-600 items-center justify-center rounded-lg py-2 px-4 gap-2 text-white w-32 hover:bg-slate-700"
          >
            <img src="github.svg" alt="" className="w-6 h-6" />
            <p>Code</p>
          </a>
          <a
            href={web}
            className="flex bg-slate-600 items-center justify-center rounded-lg py-2 px-4 gap-2 text-white w-32  hover:bg-slate-700"
          >
            <img
              src="new-window-svgrepo-com (1).svg"
              className="w-5 h-5"
              alt=""
            />
            <p>Preview</p>
          </a>
        </div>
      </div>
    </>
  );
};
