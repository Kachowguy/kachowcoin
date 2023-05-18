import classes from "./Header.module.css";

const Header = () => {
  return (
    <div id='home' className={classes.header}>
      <div className={classes.navbar}>
        <div>
          <img src='/logo.png' alt='' />
        </div>
        <ul>
          <a href='#home'>
            <li>HOME</li>
          </a>
          <a href='#about'>
            <li>ABOUT</li>{" "}
          </a>
          <a href='#tokenomics'>
            <li>TOKENOMICS</li>{" "}
          </a>
          <a href='#roadmap'>
            {" "}
            <li>ROADMAP</li>{" "}
          </a>
        </ul>
      </div>
      <img className={classes.car} src='/car.png' alt='' />
      <div className={classes.btns}>
        <a
          href='https://www.dextools.io/app/en/ether/pair-explorer/0x96c04cf05256d842e3b39325499f223717a979b8'
          target='_blank'
          rel='noreferrer'>
          <button className={classes.btn}>BUY NOW!</button>
        </a>
        <a href='https://t.me/LightningMcCoin' target='_blank' rel='noreferrer'>
          <button className={classes.btn}>JOIN THE PIT CREW!</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
