import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="left">
          <img src="/logo_b.png" alt="" />
        </div>

        <div className="right">
          Welcome to the dawn of a new era in the crypto universe –
          <span> Gator Inu,</span> a dynamic and innovative cryptocurrency
          project that's poised to redefine the way we perceive and engage with
          decentralized finance.
        </div>
      </div>

      {/* <a href="#" className="btn">
        Buy Token
      </a> */}

      {/* <div className="img">
        <a href="https://twitter.com/snoopy_pepe/" target="_blank">
          <img src="/tw.png" alt="" />
        </a>

        <a href="https://t.me/Snoopy_Pepe" target="_blank">
          <img src="/tg.png" alt="" />
        </a>
      </div> */}
    </div>
  );
};

export default Intro;
