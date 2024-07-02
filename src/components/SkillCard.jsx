import React from "react";

export const SkillCard = ({ name, src }) => {
  return (
    <div className="group rounded-lg bg-slate-800 h-28  w-28  relative hover:scale-110 transition border-[1px] ">
      <div className=" rounded-xl group-hover:text-white group-hover:bg-sky-600 bg-white text-black font-robomono inline-flex absolute left-0 -top-2">
        <p className="text-sm p-1 ">{name}</p>
      </div>
      <div className="">
        <img src={src} alt="" className="p-8" />
      </div>
    </div>
  );
};
