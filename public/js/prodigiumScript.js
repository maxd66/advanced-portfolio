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
// Classes: Player class, constuctor holds object of player selected, class holds all functions that can affect player stats.
// maybe a class that extends the player class with different methods
// Battle class that will manage starting health, round timer, and round ending

class Render {
  renderHome() {
    document.querySelector(
      "body"
    ).innerHTML = `    <div class="locationContainer">
    <div class="blocking">
      <button class="locationButton">Gym</button>
    </div>
    <div class="blocking">
      <button class="locationButton">Arena</button>
    </div>
  </div>
  <div class="monsterContainer">
    <img
      class="monster"
      src="./images/prodigium/placeholder.jpg"
      alt="placeholder"
    />
  </div>`;
  }

  renderArena() {}

  renderGym() {}
}

class Player {
  constructor(characterObj) {
    this.character = characterObj;
  }

  determineAdv(move, opponent) {
    const type = move.type;
    if (type === "neutral") {
      return 0;
    } else if (move.adv.includes(opponent.type)) {
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

// const render = new Render();

// render.renderHome();
