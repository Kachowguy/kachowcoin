import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div id='contact' className={classes.section}>
      <h1>Thank You</h1>
      <div className={classes.images}>
        <a href='https://t.me/LightningMcCoin' target='_blank' rel='noreferrer'>
          <img className={classes.img} src='/images/contact/1.png' alt='' />
        </a>
        <a
          href='https://twitter.com/kachowcoin?s=11'
          target='_blank'
          rel='noreferrer'>
          <img className={classes.img} src='/images/contact/3.png' alt='' />
        </a>
        <a
          href='https://www.dextools.io/app/en/ether/pair-explorer/0x96c04cf05256d842e3b39325499f223717a979b8'
          target='_blank'
          rel='noreferrer'>
          <img className={classes.img} src='/token.png' alt='' />
        </a>
      </div>
      <p>McQueen@kachowcoin.com</p>
      <p style={{ paddingBottom: "4rem" }}>
        $KCHOW is a meme coin with no intrinsic value or <br /> expectation of
        financial return. There is no formal team or
        <br /> roadmap. the coin is completely useless and
        <br /> for entertainment purposes only.
      </p>
      <a href='https://t.me/LightningMcCoin' target='_blank' rel='noreferrer'>
        <p
          style={{
            cursor: "pointer",
            wordBreak: "break-all",
          }}>
          https://t.me/LightningMcCoin
        </p>
      </a>
      <a
        href='https://twitter.com/kachowcoin?s=11'
        target='_blank'
        rel='noreferrer'>
        <p
          style={{
            cursor: "pointer",
            wordBreak: "break-all",
          }}>
          https://twitter.com/kachowcoin?s=11
        </p>
      </a>
      <a
        href='https://www.dextools.io/app/en/ether/pair-explorer/0x96c04cf05256d842e3b39325499f223717a979b8'
        target='_blank'
        rel='noreferrer'>
        <p
          style={{
            paddingBottom: "6rem",
            cursor: "pointer",
            wordBreak: "break-all",
          }}>
          https://www.dextools.io/app/en/ether/pair-explorer/0x96c04cf05256d842e3b39325499f223717a979b8
        </p>
      </a>
    </div>
  );
};

export default Contact;
