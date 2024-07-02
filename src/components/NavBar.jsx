import React, { useState } from "react";

export const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" }); // Cerrar el menú después de hacer clic en un elemento del menú
  };
  const [openMenu, setOpenMenu] = useState(false);
  const HandleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav class="bg-gray-800 border-gray-500 border-b-[1px] w-full z-20 top-0 fixed opacity-90">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white hover:scale-105 transition-all hover:text-sky-600"
            onClick={() => scrollToSection("landing")}
          >
            Facundo Jose Padilla
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={HandleMenu}
        >
          <span class="sr-only">Open main menu</span>
          {/* <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg> */}
          {openMenu ? (
            <img
              src="close-circle-svgrepo-com (1).svg"
              alt=""
              className="h-20 w-20 text-white"
            />
          ) : (
            <img
              src="menu-svgrepo-com (1).svg"
              alt=""
              className="h-20 w-20 text-white"
            ></img>
          )}
        </button>
        {openMenu && (
          <div className="text-white text-center w-full">
            <ul className="">
              <li className="mt-2" onClick={() => scrollToSection("about")}>
                About me
              </li>
              <li className="mt-2" onClick={() => scrollToSection("skills")}>
                Skills
              </li>
              <li className="mt-2" onClick={() => scrollToSection("projects")}>
                Projects
              </li>
              <li
                className="mt-2 "
                onClick={() => scrollToSection("contactame")}
              >
                Contact
              </li>
            </ul>
          </div>
        )}

        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li onClick={() => scrollToSection("about")}>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent  hover:text-sky-500 "
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li li onClick={() => scrollToSection("skills")}>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </a>
            </li>
            <li li onClick={() => scrollToSection("projects")}>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li onClick={() => scrollToSection("contactame")}>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
