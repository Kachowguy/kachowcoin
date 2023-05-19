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
        <button className={classes.btn}>BUY NOW!</button>
        <button className={classes.btn}>JOIN THE PIT CREW!</button>
      </div>
      <p>Contract Address : 0x570804ef7306df109fd108a0ff272c76c544d026</p>
    </div>
  );
};

export default Header;
