import classes from "./Roadmap.module.css";
import RoadMapCard from "../../UI/RoadMapCard";

const Roadmap = () => {
  return (
    <div id='roadmap' className={classes.roadmap}>
      <h1>ROADMAP</h1>
      <div className={classes.content}>
        <div>
          <h2>Phase 1</h2>
          <RoadMapCard
            list={[
              "LAUNCH",
              "100 HOLDERS",
              "COIN GECK",
              "COINMC",
              "$KCHOW TRENDING",
              "KILL ZEROS",
              "GROW COMMUNITY",
              "500 HOLDERS",
              "AIRDROP REWARDS",
              "LAUNCH $MATR",
              "TEAM $MATR ",
              "AIRDROP",
              "KILL MORE ZEROS",
            ]}
          />
        </div>
        <div>
          <h2>Phase 2</h2>
          <img
            className={classes.img}
            src='/images/roadmap/phase2.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
