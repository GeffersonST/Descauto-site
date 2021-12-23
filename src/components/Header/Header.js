import React from "react";

import logo from "../assets/logodescauto.png";
import { RiOilLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";

const Header = () => {
  return (
    <div className="HeaderPokemon">
      <div className="Header2">
        {" "}
        <h1>
          <AiOutlineCar />
        </h1>
        <h1>
          <RiOilLine />
        </h1>
      </div>

      <div className="HeaderLinks">
        <img src={logo} alt="Logo Boca" />
      </div>
    </div>
  );
};

export default Header;
