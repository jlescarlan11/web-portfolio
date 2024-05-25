import React from "react";
import { navigation } from "../constants";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="fixed w-svw bg-bg-dark/10 border-b border-text-dark/10">
      <nav className="sticky flex flex-row justify-around max-md:justify-between max-md:px-16 items-center font-semibold text-base p-[1rem]">
        <div>
          <a href="#home" className="flex">
            LEST
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-[1rem] max-md:hidden">
          {navigation.map((item) => (
            <a key={item.id} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="max-md:hidden">
          <FontAwesomeIcon icon={faMoon} className="size-[1.2rem] flex" />
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="size-[1.2rem] flex" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
