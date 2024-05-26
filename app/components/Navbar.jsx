import React from "react";
import { navigation } from "../constants";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="fixed w-svw bg-bg-dark/10 border-b border-text-dark/10">
      <nav className="sticky flex flex-row justify-between px-[2rem] items-center font-normal text-base py-[1rem]">
        <div>
          <a href="#home" className="flex">
            LEST
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-[1rem]">
          {navigation.map((item) => (
            <a key={item.id} href={item.url} className="max-md:hidden">
              {item.title}
            </a>
          ))}
          <div className="border-l-2 border-text-dark/10 py-[1rem] max-md:hidden"></div>
          <div className="max-md:hidden">
            <FontAwesomeIcon icon={faMoon} className="size-[1rem] flex" />
          </div>
          <div className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="size-[1rem] flex" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
