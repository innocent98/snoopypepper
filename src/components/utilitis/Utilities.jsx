import "./utilitis.scss";

const Utilities = () => {
  return (
    <div className="utilities" id="utilities">
      <h2>TOKENOMICS</h2>

      <div className="tokenomics">
        <img src="tokenomics.png" alt="" />
      </div>

      <div className="airdroping">
        <h2>AIRDROPPING</h2>

        <p className="abtxt">
          The Gator Inu Airdrop is a distribution of Gator Inu tokens to a
          select group of participants. It's our way of saying "thank you" for
          joining us as we embark on this exciting adventure. By participating
          in the airdrop, you'll have the chance to own a piece of Gator Inu
          from the very beginning.
        </p>
        <p className="abtxt">
          Participating in the Gator Inu Airdrop is simple. Stay tuned to our
          official social media channels and website for announcements about the
          airdrop. Follow the instructions provided to ensure you're eligible
          for the airdrop distribution.
        </p>

        <p style={{ textAlign: "center", fontSize: "15px" }} className="participate">
          Click the button to participate in our airdrop
        </p>

        <p style={{ textAlign: "center", marginTop: "30px" }}>
          <a href="/">AIRDROP</a>
        </p>

        <div style={{ marginTop: "150px" }}>
          <img src="road_map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Utilities;
