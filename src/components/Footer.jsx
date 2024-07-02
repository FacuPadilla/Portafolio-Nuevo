import React from "react";

export const Footer = () => {
  return (
    <footer className="footer footer-center w-full bg-slate-900 text-white p-4 relative ">
      <aside>
        <p>Copyright © ${new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};
