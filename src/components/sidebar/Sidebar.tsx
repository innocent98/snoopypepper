import React from "react";
import "./sidebar.scss";
import { useLocation } from "react-router-dom";

const Sidebar = ({ setMenu, menu }) => {
  const location = useLocation();
  const path = location.pathname;

  const handleMenu = () => {
    setMenu(false);
  };

  return (
    <div className={"side " + (menu && "menu")}>
      <a href="#" onClick={handleMenu}>
        <span className="material-icons">close</span>
      </a>

      <a
        href={path === "/airdrop" ? "/" : "#home"}
        className="link active"
        onClick={handleMenu}
      >
        Home
      </a>
      <a
        href="https://drive.google.com/uc?id=1qJsNqNDIfG2EliIumhEGtFkJAnb6EJai&export=download"
        // href="https://drive.google.com/uc?id=1iJI9RrkEaNNVfFIFFnDiYw_QvahNb6n3&export=download"
        target="_blank"
        download="SNOOPY_PEPE_WHITEPAPER_V1.0.pdf"
        rel="noreferrer"
        className="link"
      >
        White Paper
      </a>
      <a
        href={path === "/airdrop" ? "/" : "#about"}
        className="link"
        onClick={handleMenu}
      >
        About
      </a>
      <a
        href={path === "/airdrop" ? "/" : "#contact"}
        className="link"
        onClick={handleMenu}
      >
        Contact
      </a>
      <a href="/airdrop" className="link" onClick={handleMenu}>
        Airdrop
      </a>

      <a href="/login" className="link" onClick={handleMenu}>
        Earnigs
      </a>
    </div>
  );
};

export default Sidebar;
