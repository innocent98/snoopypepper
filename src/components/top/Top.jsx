import "./top.scss";

const Top = ({ setMenu }) => {
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
            <a href="#home" className="link active">
              Home
            </a>
            <a href="#about" className="link">
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
            <a href="#utilities" className="link">
              Tokenomics
            </a>
            <a href="#contact" className="link">
              Contact Us
            </a>

            <a href="/airdrop" className="link">
              Airdrop
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
