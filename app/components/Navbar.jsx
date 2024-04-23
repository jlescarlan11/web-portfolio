import React from "react";
import { navigation } from "../constants";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav>
      <a href="#home">LEST</a>
      <div>
        {navigation.map((item) => (
          <a key={item.id} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
      <div className="w-[1rem]">
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </nav>
  );
};

export default Navbar;
