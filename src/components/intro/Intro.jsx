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
        <a href="https://twitter.com/snoopy_pepe/" target="_blank">
          <img src="/tw.png" alt="" />
        </a>

        <a href="https://t.me/Snoopy_Pepe" target="_blank">
          <img src="/tg.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
