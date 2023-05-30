import React, { useEffect, useState } from "react";
import { navLinks } from "../Data";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });

    window.addEventListener("resize", closeMenu);
  }, []);

  const closeMenu = () => {
    const isMediumDevice = window.innerWidth >= 768 && window.innerWidth < 1024;
    if (isMediumDevice) {
      setToggle(false);
    }
  };

  return (
    <div
      className={`${isTop ? "shadow-lg bg-ghostWhite" : ""
        } fixed w-full top-0 left-0 z-20`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-blue flex items-center justify-center text-white font-bold">
            Q
          </div>
          <p className="text-xl">
            Yongze <span className="opacity-80">Quan</span>
          </p>
        </div>

        {!toggle && (
          <div key={toggle} className="md:flex hidden items-center gap-6">
            {navLinks.map((navLink) => {
              return (
                <div key={navLink.id}>
                  <a href={`#${navLink.href}`} className="text-lg hover:text-blue">
                    {navLink.text}
                  </a>
                </div>
              );
            })}
          </div>
        )}
        {!toggle && (
          <HiMenuAlt3
            className="cursor-pointer text-3xl md:hidden"
            onClick={() => setToggle(!toggle)}
          />
        )}

        {toggle && (
          <div className="flex flex-col ">
            {navLinks.map((navLink) => (
              <NavLinks
                key={navLink.id}
                href={navLink.href}
                text={navLink.text}
                setToggle={setToggle}
              />
            ))}
          </div>
        )}



        

      </div>

    </div>
  );
};

export default Navbar;
