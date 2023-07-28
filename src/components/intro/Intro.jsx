import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="left">
          <img src="/logo.png" alt="" />
        </div>

        <div className="right">
          Welcome to the extraordinary world of <span>Snoopy Pepe</span>, where
          memes and cryptocurrencies unite in a breathtaking spectacle of
          innovation.
        </div>
      </div>

      <a href="#" className="btn">
        Buy Token
      </a>

      <div className="img">
        <img src="/tw.png" alt="" />
        <img src="/tg.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;
