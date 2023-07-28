import React from "react";
import "./sidebar.scss";

const Sidebar = ({ setMenu, menu }) => {
  const handleMenu = () => {
    setMenu(false);
  };

  return (
    <div className={"side " + (menu && "menu")}>
      <a href="#" onClick={handleMenu}>
        <span className="material-icons">close</span>
      </a>

      <a href="#home" className="link active" onClick={handleMenu}>
        Home
      </a>
      <a href="#about" className="link" onClick={handleMenu}>
        About Us
      </a>
      <a href="#" className="link">
        White Paper
      </a>
      <a href="#utilities" className="link" onClick={handleMenu}>
        Tokenomics
      </a>
      <a href="#contact" className="link" onClick={handleMenu}>
        Contact Us
      </a>
    </div>
  );
};

export default Sidebar;
