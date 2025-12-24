function Dice({ value, rollDice }) {
  return (
    <div className="dice">
      <p>Dice: {value}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default Dice;
