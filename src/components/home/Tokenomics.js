import classes from "./Tokenomics.module.css";

const Tokenomics = () => {
  return (
    <div id='tokenomics' className={classes.tokenomics}>
      <h1>Tokenomics</h1>
      <div className={classes.content}>
        <div>
          <h2>MAX SUPPLY:</h2>
          <h3>95,000,000,000</h3>
        </div>
        <div>
          <h2>ETH LIQUIDITY POOL:</h2>
          <h3>95%</h3>
        </div>
        <div>
          <h2>TEAM & MARKETING WALLET:</h2>
          <h3>5%</h3>
        </div>
        <div>
          <h2>TAX:</h2>
          <h3>0%</h3>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
