export default function Dice(props) {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die--face" style={style} onClick={props.holdDice}>
      <h1 className="die--num">{props.value}</h1>
    </div>
  );
}
