import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>OUR TEAM </h2>
      <p>
        At the heart of Gator Inu's transformative journey stands dedicated and
        visionary core team. Comprising a diverse blend of blockchain experts,
        developers, finance professionals, and strategic thinkers, the Gator Inu
        core team is united by a shared mission – to redefine the future of
        decentralized finance.
      </p>
      <p>
         Leadership with a Purpose: Led by accomplished individuals with years
        of experience in blockchain technology and financial innovation, the
        core team sets the strategic direction for Gator Inu. Their expertise
        and strategic insights guide the project's growth and ensure that every
        step
      </p>

      <div className="wrapper">
        <div className="left">
          <h2>Contact Us</h2>
          <div className="img">
            <p>Telegram</p>
            <a href="https://t.me/gator_inu" target="_blank">
              <img src="/tg.png" alt="" />
            </a>
          </div>

          <div className="img">
            <p>Twitter</p>
            <a href="https://twitter.com/Gator_Inu?t=NAL_eB6XC_XxtsBK5ozMrQ&s=09" target="_blank">
              <img src="/tw.png" alt="" />
            </a>
          </div>

          {/* <div className="img">
            <p>Email:</p>
            <a href="mailto:support@gatorinu.com">support@gatorinu.com</a>
          </div> */}
        </div>

        {/* <div className="right">
          <img src="logo_i.png" alt="" />
        </div> */}
      </div>

      <p className="footer"
        style={{
          fontSize: "15px",
          textAlign: "center",
          marginTop: "80px",
          color: "lightgray",
        }}
      >
        (c) 2023 Gator-inu. All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
