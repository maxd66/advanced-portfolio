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
// types: water, fire, wind, earth, plant, electric, physical, dark, spirit,
// Moves

// Akua Moana
const finSlap = {
  name: "Fin Slap",
  ahp: "attack",
  damage: 20,
  critChance: 20,
  type: "physical",
  adv: ["plant", "space"],
  weak: ["dark", "spirit"],
  cooldown: 1,
  onCool: false,
};

const oceansWrath = {
  name: "Ocean's Wrath",
  ahp: "attack",
  damage: 30,
  critChance: 5,
  type: "water",
  adv: ["fire", "earth"],
  weak: ["electric", "plant"],
  cooldown: 1,
  onCool: false,
};

const goddess = {
  name: "Goddess",
  ahp: "special",
  damage: 10,
  desription:
    "Akua Moana calls on her ancestors for assistance. 75% chance your oppenent's move misses and they take 10 damage. If you're opponent does land, they are punished by the gods and receive 15 damage.",
  critChance: 75,
  type: "spirit",
  adv: ["physical", "dark"],
  weak: ["wind", "electric"],
  cooldown: 4,
  onCool: false,
};

// Wyld Tiger
const pounce = {
  name: "Pounce",
  ahp: "attack",
  damage: 30,
  critChance: 15,
  type: "dark",
  adv: ["physical", "electric"],
  weak: ["plant", "spirit"],
  cooldown: 1,
  onCool: false,
};

const phoenix = {
  name: "Phoenix",
  ahp: "heal",
  heal: 25,
  critChance: 5,
  type: "fire",
  adv: ["wind", "plant"],
  weak: ["water", "space"],
  cooldown: 2,
  onCool: false,
};

const fireConsumes = {
  name: "Fire Consumes",
  ahp: "special",
  damage: 20,
  desription:
    "Wyld Tiger preys on his opponent's weakness. The weaker the opponent, the more the fire burns.",
  critChance: 10,
  type: "fire",
  adv: ["wind", "plant"],
  weak: ["water", "space"],
  cooldown: 3,
  onCool: false,
};

// The Yeti
const boulderToss = {
  name: "Boulder Toss",
  ahp: "attack",
  damage: 20,
  critChance: 10,
  type: "earth",
  adv: ["space", "electric"],
  weak: ["water", "wind"],
  cooldown: 1,
  onCool: false,
};
// Needs to be changed
const iceKata = {
  name: "Ice Kata",
  ahp: "attack",
  damage: 30,
  critChance: 15,
  type: "water",
  adv: ["fire", "earth"],
  weak: ["fire", "space"],
  cooldown: 1,
  onCool: false,
};

const blizzardRush = {
  name: "Blizzard Rush",
  ahp: "special",
  lifesteal: 20,
  desription:
    "The Yeti rushes at his enemies with a blizzard at his back. He uses dark magic to squeeze the life from his opponent.",
  critChance: 20,
  type: "dark",
  adv: ["physical", "electric"],
  weak: ["plant", "spirit"],
  cooldown: 4,
  onCool: false,
};

const bearClaw = {
  name: "Bear Claw",
  ahp: "attack",
  damage: 10,
  critChance: 50,
  type: "physical",
  adv: ["plant", "space"],
  weak: ["spirit", "dark"],
  cooldown: 1,
  onCool: false,
};

const riverRush = {
  name: "River Rush",
  ahp: "attack",
  damage: 25,
  critChance: 5,
  type: "water",
  adv: ["fire", "earth"],
  weak: ["electric", "plant"],
  cooldown: 1,
  onCool: false,
};

const hibernation = {
  name: "Hibernation",
  ahp: "special",
  heal: 10,
  desription:
    "Sir Oso decides to take a quick rejuvinating slumber. 80% chance his opponent's hit will miss, and he gains ten health.",
  critChance: 20,
  type: "earth",
  adv: ["space", "electric"],
  weak: ["water", "wind"],
  cooldown: 4,
  onCool: false,
};

const shockWave = {
  name: "Shock Wave",
  ahp: "attack",
  damage: 30,
  critChance: 10,
  type: "electric",
  adv: ["water", "spirit"],
  weak: ["dark", "earth"],
  cooldown: 1,
  onCool: false,
};

const solarPower = {
  name: "Solar Power",
  ahp: "heal",
  heal: 20,
  critChance: 5,
  type: "space",
  adv: ["wind", "fire"],
  weak: ["physical", "earth"],
  cooldown: 3,
  onCool: false,
};

const shellUp = {
  name: "Shell Up",
  ahp: "special",
  damage: 0,
  desription:
    "Alvatron takes cover in his shell. 60% chance he will reflect half of his opponent's attack back, otherwise he only takes half the damage.",
  critChance: 20,
  type: "earth",
  adv: ["space", "electric"],
  weak: ["water", "wind"],
  cooldown: 3,
  onCool: false,
};

const organicMatter = {
  name: "Organic Matter",
  ahp: "attack",
  damage: 20,
  critChance: 10,
  type: "plant",
  adv: ["water", "dark"],
  weak: ["fire", "physical"],
  cooldown: 1,
  onCool: false,
};

const anomaly = {
  name: "Anomaly",
  ahp: "attack",
  damage: 10,
  critChance: 50,
  type: "dark",
  adv: ["physical", "electric"],
  weak: ["plant", "spirit"],
  cooldown: 2,
  onCool: false,
};

const solarBeam = {
  name: "Solar Beam",
  ahp: "special",
  damage: 20,
  desription:
    "Hamstronaut calls down a beam of solar energy on his opponent. The concentrated light deals 20 damage, and has a 50% chance to stun his enemy on their next turn.",
  critChance: 5,
  type: "space",
  adv: ["wind", "fire"],
  weak: ["earth", "physical"],
  cooldown: 5,
  onCool: false,
};

const charge = {
  name: "Charge",
  ahp: "attack",
  damage: 15,
  critChance: 20,
  type: "physical",
  adv: ["space", "plant"],
  weak: ["dark", "spirit"],
  cooldown: 1,
  onCool: false,
};

const getTheHorns = {
  name: "Get the Horns",
  ahp: "attack",
  damage: 35,
  critChance: 1,
  type: "fire",
  adv: ["wind", "plant"],
  weak: ["water", "space"],
  cooldown: 2,
  onCool: false,
};

const stampedeStomp = {
  name: "Stampede Stomp",
  ahp: "special",
  damage: 20,
  description:
    "Ay Guey sends a rumble of earth towards his oppenent. It deals 20 damage, and there is a 60% chance that your opponent's next move will be less effective.",
  critChance: 5,
  type: "earth",
  adv: ["space", "electric"],
  weak: ["water", "wind"],
  cooldown: 4,
  onCool: false,
};
// Characters
const akuaMoana = {
  name: "Akua Moana",
  description: "Loves puppies. Hates bubbles.",
  type: "water",
  startHp: 200,
  hp: 200,
  moves: [finSlap, oceansWrath, goddess],
};

const igniKambuku = {
  name: "Igni Kambuku",
  description: "Plays by the rules, but hunts for sport.",
  type: "fire",
  startHp: 150,
  hp: 150,
  moves: [pounce, phoenix, fireConsumes],
};

const kenji = {
  name: "Kenji",
  description: "Smart and big. A scary combination.",
  type: "wind",
  startHp: 250,
  hp: 250,
  moves: [boulderToss, iceKata, blizzardRush],
};

const sirOso = {
  name: "Sir Oso",
  description: "Always late, also in love with Igni Kambuku.",
  type: "earth",
  startHp: 200,
  hp: 200,
  moves: [bearClaw, riverRush, hibernation],
};

const hamstronaut = {
  name: "Hamstronaut",
  description: "Very loud. It's good sound doesn't carry in space.",
  type: "space",
  startHp: 200,
  hp: 200,
  moves: [organicMatter, anomaly, solarBeam],
};

const alvatron = {
  name: "Alvatron",
  description: "Surprisingly fast and young at heart.",
  type: "spirit",
  startHp: 250,
  hp: 250,
  moves: [shockWave, solarPower, shellUp],
};

const ayGuey = {
  name: "Ay Guey",
  description: "Makes logical decisions... except when deciding where to eat.",
  type: "physical",
  startHp: 200,
  hp: 200,
  moves: [charge, getTheHorns, stampedeStomp],
};

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
// Classes: Player class, constuctor holds object of player selected, class holds all functions that can affect player stats.
// maybe a class that extends the player class with different methods
// Battle class that will manage starting health, round timer, and round ending

class Render {
  renderHome() {
    document.querySelector(
      "body"
    ).innerHTML = `    <div class="locationContainer">
    <div class="blocking">
      <button id="gymBtn" class="locationButton">Gym</button>
    </div>
    <div class="blocking">
      <button id="arenaBtn" class="locationButton">Arena</button>
    </div>
  </div>
  <div class="monsterContainer">
    <img
      class="monster"
      src="./images/prodigium/placeholder.jpg"
      alt="placeholder"
    />
  </div>`;

    const arenaButton = document.getElementById("arenaBtn");

    arenaButton.addEventListener("click", () => {
      alert("this works");
      this.renderArena();
    });
  }

  renderArena() {}

  renderGym() {}
}

class Player {
  constructor(characterObj) {
    this.character = characterObj;
  }

  determineAdv(move, opponent) {
    if (move.adv.includes(opponent.type)) {
      return 0.25;
    } else if (move.weak.includes(opponent.type)) {
      return -0.25;
    } else {
      return 0;
    }
  }

  attack(move, opponent) {
    const crit = Math.floor(Math.random() * 100);
    const adv = this.determineAdv(move, opponent);
    let multiplier = 1 + adv;
    if (crit < move.critChance) {
      multiplier += 2;
    }
    opponent.hp -= move.dmg * multiplier;
  }

  heal(move) {
    const crit = Math.floor(Math.random() * 100);
    let multiplier = 1;
    if (crit < move.critChance) {
      multiplier += 2;
    }
    this.character.hp += move.heal * multiplier;
    if (this.character.hp > this.character.startingHp) {
      this.character.hp = this.character.startingHp;
    }
  }
}

class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.roundTimer = 100;
  }

  reset() {
    this.player1.hp = this.player1.startingHp;
    this.player2.hp = this.player2.startingHp;
    this.roundTimer = 100;
  }
}

// Home Page Logic
const render = new Render();

// This is for the Arena Logic

const move1El = document.getElementById("move1");
const move2El = document.getElementById("move2");
const healthBar = document.getElementById("hp");

move1El?.addEventListener("click", () => {
  healthBar.setAttribute("value", "50");
});

move2El?.addEventListener("click", () => {
  healthBar.setAttribute("value", "90");
});
// const determineAdv = (move, p2) => {
//   const type = move.type;
//   if (type === "neutral") {
//     return 0;
//   } else if (move.adv.includes(p2.type)) {
//     return 0.25;
//   } else if (move.weak.includes(p2.type)) {
//     return -0.25;
//   } else {
//     return 0;
//   }
// };

// const calculateEffect = (p1, p2, move) => {
//   const crit = Math.floor(Math.random() * 100);
//   const adv = determineAdv(move, p2);
//   let multiplier = 1 + adv;
//   if (crit < move.critChance) {
//     multiplier += 2;
//   }
//   switch (move.ahp) {
//     case "attack":
//       p2.hp -= Math.floor(move.damage * multiplier);
//       break;
//     case "heal":
//       p1.hp += Math.floor(move.heal * multiplier);
//       break;
//     case "protect":
//       break;
//   }
// };

// render.renderHome();
