import "./top.scss";

const Top = ({ setMenu }) => {
  const handleMenu = () => {
    setMenu(true);
  };

  return (
    <div className="top">
      <div className="wrapper">
        <div className="left">
          <img src="/LOGO.png" alt="" />
        </div>

        <div className="right">
          <div className="nav">
            <a href="#home" className="link active">
              Home
            </a>
            <a href="#about" className="link">
              About Us
            </a>
            <a href="#" className="link">
              White Paper
            </a>
            <a href="#utilities" className="link">
              Tokenomics
            </a>
            <a href="#contact" className="link">
              Contact Us
            </a>

            <a href="#" className="btn">
              Buy Token
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
