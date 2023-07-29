import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Our Team </h2>
      <p>
        Our team at Snoopy Pepe is a dynamic force of passionate visionaries
        dedicated to bringing joy, innovation, and lasting impact to the crypto
        world. With a diverse range of expertise and a shared love for all
        things meme-related, we come together with a common goal: to redefine
        the possibilities of the Snoopy Pepe ecosystem and create an
        unparalleled experience for our community. Led by experienced
        professionals with a deep understanding of blockchain technology and a
        keen eye for creativity, our team combines technical prowess with a
        relentless drive for excellence. From developers and designers to
        marketing specialists and community managers, each member contributes
        their unique talents. skillsets, and perspectives to propel Snoopy Pepe
        forward
      </p>

      <div className="wrapper">
        <div className="left">
          <h2>Contact Us</h2>
          <div className="img">
            <p>Telegram</p>
            <a href="https://t.me/SnoopyPepe" target="_blank">
              <img src="/tg.png" alt="" />
            </a>
          </div>

          <div className="img">
            <p>Twitter</p>
            <a href="https://twitter.com/snoopy_pepe/" target="_blank">
              <img src="/tw.png" alt="" />
            </a>
          </div>

          <div className="img">
            <p>Email:</p>
            <a href="mailto:support@snoopypepe.com">support@snoopypepe.com</a>
          </div>
        </div>

        <div className="right">
          <img src="logo_i.png" alt="" />
        </div>
      </div>

      <p
        style={{
          fontSize: "15px",
          textAlign: "center",
          marginTop: "80px",
          color: "lightgray",
        }}
      >
        (c) 2023 Snoopy pepe. All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
