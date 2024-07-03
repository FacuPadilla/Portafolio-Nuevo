import React from "react";

export const Footer = () => {
  return (
    <footer className="footer footer-center w-full bg-gray-800 opacity-90 border-gray-500 border-t-[1px] text-white p-4 relative ">
      <aside>
        <p>Copyright © ${new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};
