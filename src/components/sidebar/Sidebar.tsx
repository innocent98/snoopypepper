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
      <a
        href="https://drive.google.com/uc?id=1iJI9RrkEaNNVfFIFFnDiYw_QvahNb6n3&export=download"
        target="_blank"
        download="SNOOPY_PEPE_WHITEPAPER_V1.0.pdf"
        rel="noreferrer"
        className="link"
      >
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
