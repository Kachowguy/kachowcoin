import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div id='contact' className={classes.section}>
      <h1>Thank You</h1>
      <div className={classes.images}>
        <a href='https://t.me/RIZZARDZ' target='_blank' rel='noreferrer'>
          <img className={classes.img} src='/images/contact/1.png' alt='' />
        </a>
        <a
          href='https://twitter.com/Rizzcoin69'
          target='_blank'
          rel='noreferrer'>
          <img className={classes.img} src='/images/contact/3.png' alt='' />
        </a>
      </div>
      <p>kachow@LIghtningmccoin.io</p>
      <p style={{ paddingBottom: "4rem" }}>
        $KCHOW is a meme coin with no intrinsic value or <br /> expectation of
        financial return. There is no formal team or
        <br /> roadmap. the coin is completely useless and
        <br /> for entertainment purposes only.
      </p>
    </div>
  );
};

export default Contact;
