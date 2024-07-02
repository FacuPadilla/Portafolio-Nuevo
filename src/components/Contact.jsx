import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export const Contact = () => {
  const [phonehover, setPhonehover] = useState(false);
  const handlePhoneHover = () => {
    setPhonehover(!phonehover);
  };

  const [gmailhover, setgmailhover] = useState(false);
  const handlegmailHover = () => {
    setgmailhover(!gmailhover);
  };

  const [linkedinhover, setlinkedinhover] = useState(false);
  const handlelinkedinHover = () => {
    setlinkedinhover(!linkedinhover);
  };

  const [githubhover, setgithubhover] = useState(false);
  const handlegithubHover = () => {
    setgithubhover(!githubhover);
  };

  return (
    <div className="my-20 lg:px-20" id="contactame">
      <div className="text-white">
        <h1 className="text-sky-600 font-robomono text-7xl">Contact Me</h1>
        <div className="md:flex text-center justify-center mt-20 gap-10 space-y-10">
          <div className="md:w-[50%] grid md:grid-cols-2 gap-4 items-center justify-center">
            <div className="bg-slate-700 h-32 w-64 md:w-auto flex items-center justify-center relative rounded-lg border-[1px] opacity-85 hover:opacity-100 hover:scale-105 transition-all">
              <a href="" className="flex items-center justify-center">
                <img
                  src="../../public/github.svg"
                  alt=""
                  className="w-20 h-20"
                />
              </a>
              <p className="absolute -bottom-1 -right-1 bg-white text-black rounded-lg p-1 text-sm">
                GitHub
              </p>
              <p
                className={`${
                  githubhover ? "opacity-100" : "opacity-0"
                } absolute -left-1 -top-1  bg-white text-black rounded-lg p-1 text-sm transition-opacity duration-500 ease-in-out`}
              >
                FacuPadilla
              </p>
              <a
                href="https://github.com/FacuPadilla"
                className="absolute bottom-1 left-2 flex gap-1"
                onMouseEnter={handlegithubHover}
                onMouseLeave={handlegithubHover}
              >
                <img
                  src="../../public/new-window-svgrepo-com (1).svg"
                  alt=""
                  className="w-5 h-5 "
                />
                <p
                  className={`transition-opacity duration-500 ease-in-out ${
                    githubhover ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Go
                </p>
              </a>
            </div>
            <div className="bg-slate-700 h-32 flex relative items-center justify-center rounded-lg border-[1px] opacity-85 hover:opacity-100 hover:scale-105 transition-all">
              <a href="" className="flex items-center justify-center">
                <img
                  src="../../public/gmail-svgrepo-com.svg"
                  alt=""
                  className="w-20 h-20"
                />
              </a>
              <p className="absolute -bottom-1 -right-1 bg-white text-black rounded-lg p-1 text-sm">
                Gmail
              </p>
              <p
                className={`${
                  gmailhover ? "opacity-100" : "opacity-0"
                } absolute -left-1 -top-1  bg-white text-black rounded-lg p-1 text-sm transition-opacity duration-500 ease-in-out`}
              >
                Facupadilla1904@gmail.com
              </p>
              <CopyToClipboard text="facupadilla1904@gmail.com">
                <span
                  className="absolute bottom-1 left-2 flex gap-1"
                  onClick={() => toast.success("Successfully Copied!")}
                  onMouseEnter={handlegmailHover}
                  onMouseLeave={handlegmailHover}
                >
                  <img
                    src="../../public/copy-svgrepo-com.svg"
                    alt=""
                    className="w-5 h-5 "
                  />
                  <p
                    className={`transition-opacity duration-500 ease-in-out ${
                      gmailhover ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Copy
                  </p>
                </span>
              </CopyToClipboard>
            </div>
            <div className="bg-slate-700 relative h-32 flex items-center justify-center rounded-lg border-[1px] opacity-85 hover:opacity-100 hover:scale-105 transition-all">
              <a href="" className="flex items-center justify-center">
                <img
                  src="../../public/linkedin-svgrepo-com.svg"
                  alt=""
                  className="w-20 h-20"
                />
              </a>
              <p className="absolute -bottom-1 -right-1 bg-white text-black rounded-lg p-1 text-sm">
                Linkedin
              </p>
              <p
                className={`${
                  linkedinhover ? "opacity-100" : "opacity-0"
                } absolute -left-1 -top-1  bg-white text-black rounded-lg p-1 text-sm transition-opacity duration-500 ease-in-out`}
              >
                FacuPadilla
              </p>
              <a
                href="https://www.linkedin.com/in/facundo-padilla-60371b26a"
                className="absolute bottom-1 left-2 flex gap-1"
                onMouseEnter={handlelinkedinHover}
                onMouseLeave={handlelinkedinHover}
              >
                <img
                  src="../../public/new-window-svgrepo-com (1).svg"
                  alt=""
                  className="w-5 h-5 "
                />
                <p
                  className={`transition-opacity duration-500 ease-in-out ${
                    linkedinhover ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Go
                </p>
              </a>
            </div>
            <div className="bg-slate-700 relative h-32 flex items-center justify-center rounded-lg border-[1px] opacity-85 hover:opacity-100 hover:scale-105 transition-all">
              <a href="" className="flex items-center justify-center">
                <img
                  src="../../public/phone-calling-svgrepo-com.svg"
                  alt=""
                  className="w-20 h-20"
                />
              </a>
              <p className="absolute -bottom-1 -right-1 bg-white text-black rounded-lg p-1 text-sm">
                Phone
              </p>
              <p
                className={`${
                  phonehover ? "opacity-100" : "opacity-0"
                } absolute -left-1 -top-1  bg-white text-black rounded-lg p-1 text-sm transition-opacity duration-500 ease-in-out`}
              >
                +54 381 4465466
              </p>
              <CopyToClipboard text="+54 381 4465466">
                <span
                  className="absolute bottom-1 left-2 flex gap-1"
                  onMouseEnter={handlePhoneHover}
                  onMouseLeave={handlePhoneHover}
                  onClick={() => toast.success("Successfully Copied!")}
                >
                  <img
                    src="../../public/copy-svgrepo-com.svg"
                    alt=""
                    className="w-5 h-5 "
                  />
                  <p
                    className={`transition-opacity duration-500 ease-in-out ${
                      phonehover ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Copy
                  </p>
                </span>
              </CopyToClipboard>
            </div>
          </div>
          <div className="md:w-[50%] md:text-lg">
            <p>
              Thank you for coming this far, if you think I can add value to
              your team, do not hesitate to write to me.
            </p>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
