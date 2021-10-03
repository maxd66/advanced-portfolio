// need to have functions that will subtract hitpoints from players life based on attack type, crit chance and enemy type and defense
// player attack objects could look like
// player object could look like
// const p1 = {
//   name: "Gristle",
//   type: "plant",
//   startHp: 200,
//   hp: 150,
//   moves: [ivySpikes, strangleRoot, regrow],
// };
// const ivySpikes = {
//   ahp: "attack",
//   damage: 20,
//   critChance: 5,
//   type: "plant",
//   adv: ["water", "mythical"],
//   weak: ["fire", "ice"],
//   onCool: false,
// };
// const regrow = {
//   ahp: "heal",
//   heal: 10,
//   critChance: 10,
//   type: "neutral",
//   onCool: false,
// };

// enemy player object
// const p2 = {
//   name: "Koogle",
//   type: "mythical",
//   startHp: 220,
//   hp: 200,
//   moves: [shadowSlice, minorIllusion, poisonMist],
// };

// function should take players in question, and move chosen
// function will determine if move is heal, damage, or protect
// then will calulate changes to players
// Plan:
// Classes:

const determineAdv = (move, p2) => {
  const type = move.type;
  if (type === "neutral") {
    return 0;
  } else if (move.adv.includes(p2.type)) {
    return 0.25;
  } else if (move.weak.includes(p2.type)) {
    return -0.25;
  } else {
    return 0;
  }
};

const calculateEffect = (p1, p2, move) => {
  const crit = Math.floor(Math.random() * 100);
  const adv = determineAdv(move, p2);
  let multiplier = 1 + adv;
  if (crit < move.critChance) {
    multiplier += 2;
  }
  switch (move.ahp) {
    case "attack":
      p2.hp -= Math.floor(move.damage * multiplier);
      break;
    case "heal":
      p1.hp += Math.floor(move.heal * multiplier);
      break;
    case "protect":
      break;
  }
};
