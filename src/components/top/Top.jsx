import { useLocation } from "react-router-dom";
import "./top.scss";

const Top = ({ setMenu }) => {
  const location = useLocation();
  const path = location.pathname;

  const handleMenu = () => {
    setMenu(true);
  };

  return (
    <div className="top">
      <div className="wrapper">
        <div className="left">
          <img src="/logo.png" alt="" />
        </div>

        <div className="right">
          <div className="nav">
            <a
              href={path === "/airdrop" ? "/" : "#home"}
              className="link active"
            >
              Home
            </a>
            <a href={path === "/airdrop" ? "/" : "#about"} className="link">
              About Us
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
            <a href={path === "/airdrop" ? "/" : "#utilities"} className="link">
              Tokenomics
            </a>
            <a href={path === "/airdrop" ? "/" : "#contact"} className="link">
              Contact Us
            </a>

            <a href="/airdrop" className="link">
              Airdrop
            </a>

            <a href="/login" className="link">
              Earnigs
            </a>
          </div>

          <span className="material-icons menu" onClick={handleMenu}>
            menu
          </span>
        </div>
      </div>
    </div>
  );
};

export default Top;
