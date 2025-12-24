import { useState } from "react";
import "./App.css";

export default function DiceDareLudo() {
  const [moves, setMoves] = useState({
    red: 0,
    green: 0,
    yellow: 0,
    blue: 0,
  });

  const [lastMove, setLastMove] = useState("none");
  const [showCongrats, setShowCongrats] = useState(false);
  const [task, setTask] = useState("");

  const tasks = [
    "Sing a song 🎵","Dance 💃","Say 'I love you' ❤️","Do 5 jumping jacks 🤸",
    "Make a funny face 😜","Do a silly clap 👏","Spin around 3 times 🌀",
    "Jump like a frog 🐸","Pretend to be a robot 🤖","Act like a cat 🐱",
    "Do a silly dance 💃","Sing your favorite line 🎶","Hop on one leg 🦵",
    "Make a funny voice 😆","Do a handstand 🤸‍♂️","Pretend to be a chicken 🐔",
    "Act like a superhero 🦸","Say tongue twister 3 times 👅","Do a silly laugh 😂",
    "Pretend to be invisible 👻","Make a silly shadow 🖐️","Sing nursery rhyme 🎤",
    "Do 10 push-ups 💪","Act like a monkey 🐒","Pretend to sleep 😴",
    "Make a silly face with your tongue 😛","Dance like no one is watching 💃",
    "Pretend to be a dinosaur 🦖","Do a funny walk 🚶","Sing like a robot 🤖🎵",
    "Hop like a bunny 🐰","Make a funny hat with hands 🎩","Pretend to drive a car 🚗",
    "Act like a pirate 🏴‍☠️","Do a silly wave 👋","Pretend to be a singer 🎤",
    "Do a silly handshake 🤝","Make a funny noise 🗣️","Pretend to juggle 🤹",
    "Do a funny march 🚶‍♂️","Sing like an opera singer 🎶","Do a silly squat 🏋️",
    "Pretend to fly like a bird 🕊️","Do a funny face emoji 😝","Dance with your hands 💃",
    "Act like a zombie 🧟","Sing in gibberish 🎵","Do 5 star jumps ✨",
    "Pretend to eat invisible food 🍽️","Do a funny pose 🤳","Act like a magician 🧙",
    "Do a silly whisper 🤫","Pretend to type on invisible keyboard ⌨️",
    "Make a funny animal sound 🐶","Act like a superhero landing 🦸‍♂️",
    "Do a funny bow 🤗","Pretend to be a ninja 🥷","Sing like a baby 👶🎵",
    "Do a silly hand gesture ✌️","Act like a crab 🦀","Pretend to swim 🏊",
    "Make a funny face in mirror 🪞","Sing a nursery rhyme 🎶","Do a silly hop 🐸",
    "Pretend to be a king 👑","Do a robot dance 🤖","Act like a dog 🐕",
    "Pretend to juggle invisible balls 🤹‍♂️","Do a funny scream 😱",
    "Make a silly nose wiggle 👃","Sing like a whale 🐳🎵","Dance like a robot 🤖💃",
    "Pretend to ride a horse 🐎","Act like a lion 🦁","Do a silly tiptoe 🤏",
    "Pretend to climb a mountain 🏔️","Do a funny wink 😉","Act like a superhero flying 🦸‍♀️",
    "Pretend to be a baby crawling 👶","Do a silly skip 🏃‍♂️","Sing your favorite emoji 🎤😎",
    "Make a funny echo sound 🔊","Pretend to lift invisible weights 🏋️‍♀️",
    "Act like a snake 🐍","Do a silly clap 👏👏","Pretend to be a chef 👨‍🍳",
    "Do a funny dance with arms 💃","Sing like a parrot 🦜🎵","Act like a king 👑",
    "Pretend to ride a bike 🚴","Do a silly stomp 👣","Make a funny face with eyes crossed 😵‍💫",
    "Pretend to be a superhero landing 🦸‍♂️","Do a silly robot walk 🤖🚶",
    "Act like a bird 🐦","Sing like a frog 🐸🎵","Do a funny wave 👋👋",
    "Pretend to swim like a fish 🐟","Act like a tiger 🐯","Do a silly jump 🦘",
    "Sing like a whale 🐋","Pretend to climb like a monkey 🐒","Do a silly twist 💃",
  ];

  function handleMove(color) {
    const randomStep = Math.floor(Math.random() * 6) + 1;
    setMoves({ ...moves, [color]: moves[color] + randomStep });
    setLastMove(color);

    if (randomStep === 6) {
      setShowCongrats(true);
      setTask("");
    } else {
      setShowCongrats(false);
      setTask("");
    }
  }

  function handleCongratsClick() {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setTask(randomTask);
  }

  return (
    <div className="app">
      <h1>🎲 Dice Dare Ludo</h1>
      <p className={`last-move ${lastMove}`}>{lastMove === "none" ? "No move yet" : `${lastMove} moved`}</p>

      <div className="board">
        {["blue","yellow","green","red"].map((color) => (
          <div key={color} className={`player-card ${color}`}>
            <p>{color} moves: {moves[color]}</p>
            <button className={`roll-btn ${color}`} onClick={() => handleMove(color)}>Roll Dice 🎲</button>
          </div>
        ))}
      </div>

      {showCongrats && (
        <div className="congrats-section">
          {/* Wrapper to keep button and task together */}
          <div className="congrats-wrapper">
            <button className="congrats-btn" onClick={handleCongratsClick}>🎉 Congratulations!</button>
            {task && <div className="task-box">🎯 Task: {task}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
