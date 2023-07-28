import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About us</h2>
      <h4>WHAT IS SNOOPY PEPE?</h4>
      <p>
        Snoopy Pepe emerges as a beacon of innovation and enchantment. Combining
        the iconic Pepe meme with the endearing spirit of Snoopy, this
        remarkable token transcends boundaries and captivates the imagination of
        a global community. With its roots firmly planted in the Binance Smart
        Chain (BSC), Snoopy Pepe offers an extraordinary journey filled with
        laughter, creativity, and limitless opportunities. At its core, Snoopy
        Pepe is a community-driven revolution. Built on the principles of
        inclusivity and collaboration, it empowers individuals to participate in
        an ecosystem where their ideas are valued and their voices heard. With
        its open-source, audited smart contracts, Snoopy Pepe ensures
        transparency and security, instilling confidence in every interaction.
      </p>
      <a href="#">Read More...</a>

      <h2 style={{ marginTop: "100px" }}>Snoopy Pepe Three Function </h2>
      <p>
        Snoopy pepe employ 3 simple functions Reflection + LP acquisition +
        Burn. IIn each sell swap, the transaction is charged a 8% fee, which is
        splited into 3 ways, while the buy swap is charge at 0% tax.
      </p>

      <p>
        2% fee of the sell tax will be redistributed to all existing holders,
        i.e holders holding minimum of 100,000 snoopypepe token as automatic
        reflection in BNB Smart Chain.
      </p>

      <p>
        Another 2% fee of the sell tax will be automatically burn, While 3% will
        go to the marketing wallet.
      </p>

      <p>
        1% of the Snoopypepe tokens from the sell tax are paired automatically
        with the previously mentioned BNB and added as a liquidity pair on the
        decentralize exchanges.
      </p>

      <p>This fee powers the project.</p>

      <img src="/logo_o.png" alt="" />
    </div>
  );
};

export default About;
