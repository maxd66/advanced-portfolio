// need to have functions that will subtract hitpoints from players life based on attack type, crit chance and enemy type and defense
// player attack objects could look like
// player object could look like
const p1 = {
  name: "Gristle",
  startHp: 200,
  hp: 150,
  moves: [ivySpikes, strangleRoot, regrow],
};
// const ivySpikes = {
//     ahp: "attack",
//     damage: 20,
//     critChance: 5,
//     type: "plant",
//     adv: ["water", "mythical"],
//     weak: ["fire", "ice"],
// };
// const regrow = {
//   ahp: "heal",
//   heal: 10,
//   critChance: 10,
//   type: "neutral",
// };

// enemy player object
// const p2 = {
//   name: "Koogle",
//   startHp: 220,
//   hp: 200,
//   moves: [shadowSlice, minorIllusion, poisonMist],
// };

// function should take players in question, and move chosen
// function will determine if move is heal, damage, or protect
// then will calulate changes to players

const determineAdv = (move, p2) => {
  const type = move.type;
};

const calculateEffect = (p1, p2, move) => {
  const crit = Math.floor(Math.random() * 100);
  const adv = determineAdv(move, p2);
  switch (move.ahp) {
    case "attack":
      if (crit < move.critChance) {
        p2.hp -= move.damage * 3;
      } else {
        p2.hp -= move.damage;
      }
      break;
    case "heal":
      break;
    case "protect":
      break;
  }
};
