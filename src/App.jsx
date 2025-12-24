import { useState } from "react";
import "./App.css";

export default function DiceDareLudo() {

  // 🔐 Player names
  
  const [players, setPlayers] = useState({
    blue: "",
    yellow: "",
    green: "",
    red: "",
  });

  const [gameStarted, setGameStarted] = useState(false);

  // 🎲 Last dice number only (NO accumulator)
  const [moves, setMoves] = useState({
    blue: "-",
    yellow: "-",
    green: "-",
    red: "-",
  });

  // ⭐ Count of sixes
  const [sixCount, setSixCount] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  });

  const [lastMove, setLastMove] = useState("none");
  const [showCongrats, setShowCongrats] = useState(false);
  const [task, setTask] = useState("");
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const tasks = [
    "Sing a song 🎵",
    "Dance 💃",
    "Say I love you ❤️",
    "Do 5 jumping jacks 🤸",
    "Make a funny face 😜",
    "Act like a robot 🤖",
    "Jump like a frog 🐸",
    "Pretend to be a superhero 🦸",
    "Do a silly walk 🚶",
  ];

  // ▶️ Start game
  function startGame() {
    if (
      !players.blue ||
      !players.yellow ||
      !players.green ||
      !players.red
    ) {
      alert("All 4 players must enter name 😄");
      return;
    }
    setGameStarted(true);
  }

  // 🎲 Dice roll
  function handleMove(color) {
    if (gameOver) return;

    const dice = Math.floor(Math.random() * 6) + 1; // ✅ 1–6

    setMoves({ ...moves, [color]: dice });
    setLastMove(color);
    setTask("");
    setShowCongrats(false);

    // 🎉 Only when dice = 6
    if (dice === 6) {
      const updatedSixCount = {
        ...sixCount,
        [color]: sixCount[color] + 1,
      };

      setSixCount(updatedSixCount);
      setShowCongrats(true);

      // 🏆 REAL WINNER CONDITION
      if (updatedSixCount[color] === 3) {
        setWinner(players[color]);
        setGameOver(true);
        setShowCongrats(false); // ❌ no more congratulations
        setTask("");
      }
    }
  }

  // 🎯 Task only after clicking Congratulations
  function handleCongratsClick() {
    if (gameOver) return;
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setTask(randomTask);
  }

  // 🔐 LOGIN SCREEN
  if (!gameStarted) {
    return (
      <div className="app">
        <h1>🎲 Dice Dare Ludo</h1>

        {["blue", "yellow", "green", "red"].map((color) => (
          
          <input
            key={color}
            placeholder={`${color} player name`}
            value={players[color]}
            onChange={(e) =>
              setPlayers({ ...players, [color]: e.target.value })
            }
          />
        ))}

        <button className="congrats-btn" onClick={startGame}>
          Start Game 🚀
        </button>
        </div>
      
    );
  }

  // 🎮 GAME SCREEN
  return (
    <div className="app">
      <h1>🎲 Dice Dare Ludo</h1>

      <p className={`last-move ${lastMove}`}>
        {lastMove === "none" ? "No move yet" : `${lastMove} moved`}
      </p>

      <div className="board">
        {["blue", "yellow", "green", "red"].map((color) => (
         <div key={color} className={`player-card ${color}`}>

  {/* 🔠 Name Initial Logo */}
  <div className="name-logo">
    {players[color].charAt(0).toUpperCase()}
  </div>

  <p>👤 {players[color]}</p>
  <p>🎲 Dice: {moves[color]}</p>
  <p>⭐ Six Count: {sixCount[color]}</p>

  <button
    className={`roll-btn ${color}`}
    disabled={gameOver}
    onClick={() => handleMove(color)}
  >
    Roll Dice 🎲
  </button>
</div>
 
        ))}
      </div>
      

      {/* 🎉 Congratulations + Task */}
      {showCongrats && !gameOver && (
        <div className="congrats-section">
          <button className="congrats-btn" onClick={handleCongratsClick}>
            🎉 Congratulations!
          </button>
          <hr></hr>
          <br></br>
          {task && <div className="task-box">🎯 {task}</div>}
        </div>
      )}

      {/* 🏆 Winner Story */}
      {winner && (
        <div className="task-box">
          🏆 <strong>{winner}</strong> is the REAL WINNER! <br />
          Three lucky sixes changed fate forever.  
          Cheers erupted, destiny smiled, and a champion was born 🎊
        </div>
      )}
    </div>
  );
}
