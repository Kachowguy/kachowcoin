import classes from "./RoadMapCard.module.css";

const RoadMapCard = ({ list, index }) => {
  return (
    <span>
      <div className={classes.card}>
        <ul>
          {list.map((name, index) => {
            return <li key={index}>-{name}</li>;
          })}
        </ul>
      </div>
    </span>
  );
};

export default RoadMapCard;
