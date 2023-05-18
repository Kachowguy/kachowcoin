import { useCallback } from "react";
import styles from "./index.module.css";
const Web19201 = () => {
  const onABOUTClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='untitled42Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onTOKENOMICSClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='untitled43Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onROADMAPClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='untitled48Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className={styles.web19201}>
      <div className={styles.dfghParent}>
        <img className={styles.dfghIcon} alt="" src="/dfgh@2x.png" />
        <img className={styles.dfghIcon1} alt="" src="/dfgh@2x.png" />
        <img className={styles.dfghIcon2} alt="" src="/dfgh@2x.png" />
        <img className={styles.dfghIcon3} alt="" src="/dfgh@2x.png" />
        <img className={styles.dfghIcon4} alt="" src="/dfgh@2x.png" />
        <img className={styles.dfghIcon5} alt="" src="/dfgh@2x.png" />
      </div>
      <div className={styles.untitled40Parent}>
        <img
          className={styles.untitled40Icon}
          alt=""
          src="/untitled-40@2x.png"
        />
        <img
          className={styles.untitled41Icon}
          alt=""
          src="/untitled-41@2x.png"
        />
      </div>
      <div className={styles.home}>HOME</div>
      <h1 className={styles.about} onClick={onABOUTClick}>
        ABOUT
      </h1>
      <h2 className={styles.tokenomics} onClick={onTOKENOMICSClick}>
        TOKENOMICS
      </h2>
      <h3 className={styles.roadmap} onClick={onROADMAPClick}>
        ROADMAP
      </h3>
      <img
        className={styles.dfp3m7a5b92a518Abea492cA18Icon}
        alt=""
        src="/dfp3m7a5b92a518abea492ca18b971431189eef-1@2x.png"
      />
      <a
        className={styles.web19201Child}
        href="https://www.dextools.io/app/en/ether/pair-explorer/0x96c04cf05256d842e3b39325499f223717a979b8"
        target="_blank"
      />
      <a
        className={styles.web19201Item}
        href="https://t.me/LightningMcCoin"
        target="_blank"
      />
      <a
        className={styles.buyNow}
        href="https://www.dextools.io/app/en/ether/pair-explorer/0x96c04cf05256d842e3b39325499f223717a979b8"
        target="_blank"
      >
        BUY NOW!
      </a>
      <a
        className={styles.joinThePit}
        href="https://t.me/LightningMcCoin"
        target="_blank"
      >
        JOIN THE PIT CREW!
      </a>
      <img
        className={styles.untitled42Icon}
        alt=""
        src="/untitled-42@2x.png"
        data-scroll-to="untitled42Image"
      />
      <b className={styles.kaChowWelcomeFolksContainer}>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`Ka-chow! Welcome, folks, to the racetrack of digital `}</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`currencies! I’m Lightning McQueen, and I’m here to `}</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`introduce you to a brand-new crypto sensation: `}</p>
        <p className={styles.kaChowWelcomeFolks}>
          Lightning McCoin, the fastest crypto in the digital world!
        </p>
        <p className={styles.kaChowWelcomeFolks}>&nbsp;</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`With the ticker symbol $KCHOW, Lightning McCoin takes `}</p>
        <p className={styles.kaChowWelcomeFolks}>
          the concept of meme coins and turbocharges it with a whole
        </p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{` lot of fun. Just like me, Lightning McCoin is all about `}</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`speed, excitement, and pushing the boundaries of what’s `}</p>
        <p className={styles.kaChowWelcomeFolks}>
          possible. Get ready for the race of your life!
        </p>
        <p className={styles.kaChowWelcomeFolks}>&nbsp;</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`So buckle up, folks, because with Lightning McCoin, it’s `}</p>
        <p className={styles.kaChowWelcomeFolks}>
          pedal to the metal, all the way to the finish line. Get ready
        </p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{` to experience a new era of digital currency that’s as `}</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`thrilling as a victory lap at the Piston Cup! Together, we’ll `}</p>
        <p className={styles.kaChowWelcomeFolks}>
          leave a trail of excitement and adventure in our wake.
        </p>
        <p className={styles.kaChowWelcomeFolks}>&nbsp;</p>
        <p
          className={styles.kaChowWelcomeFolks}
        >{`Lightning McCoin: Speed, fun, and the future of crypto. `}</p>
        <p className={styles.kaChowWelcomeFolks}>&nbsp;</p>
        <p className={styles.kaChowWelcomeFolks}>Ka-chow!</p>
      </b>
      <img
        className={styles.untitled43Icon}
        alt=""
        src="/untitled-43@2x.png"
        data-scroll-to="untitled43Image"
      />
      <img className={styles.untitled44Icon} alt="" src="/untitled-44@2x.png" />
      <b className={styles.maxSupply}>MAX SUPPLY:</b>
      <b className={styles.ethLiquidityPool}>ETH LIQUIDITY POOL:</b>
      <img className={styles.untitled45Icon} alt="" src="/untitled-45@2x.png" />
      <b className={styles.teamMarketing}>{`TEAM & MARKETING WALLET:`}</b>
      <img className={styles.untitled47Icon} alt="" src="/untitled-47@2x.png" />
      <b className={styles.tax}>TAX:</b>
      <img className={styles.untitled46Icon} alt="" src="/untitled-46@2x.png" />
      <img
        className={styles.untitled48Icon}
        alt=""
        src="/untitled-48@2x.png"
        data-scroll-to="untitled48Image"
      />
      <img className={styles.hhpclogoIcon} alt="" src="/hhpclogo@2x.png" />
      <b className={styles.phase2}>PHASE 2:</b>
      <b className={styles.phase1}>PHASE 1:</b>
      <div className={styles.web19201Inner} />
      <b className={styles.launch100HoldersCoinGeckContainer}>
        <p className={styles.kaChowWelcomeFolks}>-LAUNCH</p>
        <p className={styles.kaChowWelcomeFolks}>-100 HOLDERS</p>
        <p className={styles.kaChowWelcomeFolks}>-COIN GECK</p>
        <p className={styles.kaChowWelcomeFolks}>-COINMC</p>
        <p className={styles.kaChowWelcomeFolks}>-$KCHOW TRENDING</p>
        <p className={styles.kaChowWelcomeFolks}>-KILL ZEROS</p>
        <p className={styles.kaChowWelcomeFolks}>-GROW COMMUNITY</p>
        <p className={styles.kaChowWelcomeFolks}>-500 HOLDERS</p>
        <p className={styles.kaChowWelcomeFolks}>-AIRDROP REWARDS</p>
        <p className={styles.kaChowWelcomeFolks}>-LAUNCH $MATR</p>
        <p className={styles.kaChowWelcomeFolks}>{`-TEAM $MATR `}</p>
        <p className={styles.kaChowWelcomeFolks}> AIRDROP</p>
        <p className={styles.kaChowWelcomeFolks}>-KILL MORE ZEROS</p>
      </b>
      <a
        className={styles.twitterSymbol}
        href="https://twitter.com/kachowcoin?s=11"
        target="_blank"
      />
      <a
        className={styles.telegramLogo}
        href="https://t.me/LightningMcCoin"
        target="_blank"
      />
      <div className={styles.kchowIsA}>
        $KCHOW is a meme coin with no intrinsic value or expectation of
        financial return. There is no formal team or roadmap. the coin is
        completely useless and for entertainment purposes only.
      </div>
      <div className={styles.kachowlightningmccoinio}>
        kachow@LIghtningmccoin.io
      </div>
      <b className={styles.thankYou}>THANK YOU!</b>
    </div>
  );
};

export default Web19201;
