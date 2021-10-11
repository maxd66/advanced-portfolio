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
  description:
    "Akua Moana calls on her ancestors for assistance. 75% chance your oppenent's move misses and they take 10 damage. If you're opponent does land, they are punished by the gods and receive 15 damage.",
  critChance: 75,
  type: "spirit",
  adv: ["physical", "dark"],
  weak: ["wind", "electric"],
  cooldown: 4,
  onCool: false,
};

//Igni Kambuku
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
  damage: 25,
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
  description:
    "Igni Kambuku preys on his opponent's weakness. The weaker the opponent, the more the fire burns.",
  critChance: 10,
  type: "fire",
  adv: ["wind", "plant"],
  weak: ["water", "space"],
  cooldown: 3,
  onCool: false,
};

// Kenji
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

const iceKata = {
  name: "Ice Kata",
  ahp: "attack",
  damage: 30,
  critChance: 15,
  type: "water",
  adv: ["fire", "earth"],
  weak: ["fire", "space"],
  cooldown: 2,
  onCool: false,
};

const blizzardRush = {
  name: "Blizzard Rush",
  ahp: "special",
  lifesteal: 20,
  description:
    "The Yeti rushes at his enemies with a blizzard at his back. He uses dark magic to squeeze 20 hp from his opponent and claim it for himself.",
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
  damage: 10,
  description:
    "Sir Oso decides to take a quick rejuvinating slumber. 80% chance his opponent's hit will miss. He also gains ten health.",
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
  damage: 20,
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
  description:
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
  description:
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

const stareDown = {
  name: "Stare Down",
  ahp: "attack",
  damage: 10,
  critChance: 50,
  type: "dark",
  adv: ["physical", "electric"],
  weak: ["plant", "spirit"],
  cooldown: 1,
  onCool: false,
};

const wildSurvival = {
  name: "Wild Survival",
  ahp: "heal",
  damage: 20,
  critChance: 20,
  type: "plant",
  adv: ["water", "dark"],
  weak: ["physical", "fire"],
  cooldown: 2,
  onCool: false,
};

const bloodThirsty = {
  name: "Blood Thirsty",
  ahp: "special",
  damage: 20,
  description:
    "T.T increases in mass each time she feasts on her opponent's blood. This attack does 20 damage, but it's crit chance increases by 10% each time she uses it.",
  critChance: 5,
  type: "space",
  adv: ["wind", "fire"],
  weak: ["physical", "earth"],
  cooldown: 3,
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
  startHp: 200,
  hp: 200,
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

const tt = {
  name: "T.T",
  description: "The fastest tongue in the West.",
  type: "dark",
  startHp: 200,
  hp: 200,
  moves: [stareDown, wildSurvival, bloodThirsty],
};

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
      this.renderArena();
    });
  }

  renderMoves() {
    const move1 = selectedCharacter.moves[0];
    const move2 = selectedCharacter.moves[1];
    const move3 = selectedCharacter.moves[2];
    document.querySelector(
      "#moveBox"
    ).innerHTML = `              <button id="move1">${move1.name}</button>
      <div id="move1Tip" class="moveTip">
        <h3>${move1.name}</h3>
        <ul>
          <li>${move1.ahp}: ${move1.damage}</li>
          <li>Type: ${move1.type}</li>
          <li>Cooldown: ${move1.cooldown}</li>
        </ul>
      </div>
      <button id="move2">${move2.name}</button>
      <div id="move2Tip" class="moveTip">
        <h3>${move2.name}</h3>
        <ul>
          <li>${move2.ahp}: ${move2.damage}</li>
          <li>Type: ${move2.type}</li>
          <li>Cooldown: ${move2.cooldown}</li>
        </ul>
      </div>
      <button id="move3">${move3.name}</button>
      <div id="move3Tip" class="moveTip">
        <h3>${move3.name}, <em>special</em></h3>
        <ul>
          <li>${move2.description}</li>
        </ul>
      </div>`;
  }

  renderArena() {
    const move1 = selectedCharacter.moves[0];
    const move2 = selectedCharacter.moves[1];
    const move3 = selectedCharacter.moves[2];
    document.querySelector(
      "body"
    ).innerHTML = `    <div class="player2Container">
    <div class="enemyStats">
      <h2>HP: <progress id="enemyHP" max=${selectedEnemy.startHp} value=${
      selectedEnemy.hp
    }></progress></h2>
      <h2 id="enemyStats">${
        selectedEnemy.name
      }, <em>${selectedEnemy.type.toUpperCase()}</em></h2>
    </div>
    <img
      class="player2"
      src="./images/prodigium/placeholder.jpg"
      alt="placeholder"
    />
  </div>
  <div class="player1Container">
    <img
      class="player1"
      src="./images/prodigium/placeholder.jpg"
      alt="placeholder"
    />
    <div class="outerBox">
      <div class="statBox">
        <h1 id="playerStats">${
          selectedCharacter.name
        }, <em class="smallText">${selectedCharacter.type.toUpperCase()}</em></h1>
        <div class="outerBox">
          <div class="dynaBox">
            <h2>HP: <progress id="hp" max=${selectedCharacter.startHp} value=${
      selectedCharacter.hp
    }></progress></h2>
            <div class="moveBox">
            <button id="move1">${move1.name}</button>
      <div id="move1Tip" class="moveTip">
        <h3>${move1.name}</h3>
        <ul>
          <li>${move1.ahp}: ${move1.damage}</li>
          <li>Type: ${move1.type}</li>
          <li>Cooldown: ${move1.cooldown}</li>
        </ul>
      </div>
      <button id="move2">${move2.name}</button>
      <div id="move2Tip" class="moveTip">
        <h3>${move2.name}</h3>
        <ul>
          <li>${move2.ahp}: ${move2.damage}</li>
          <li>Type: ${move2.type}</li>
          <li>Cooldown: ${move2.cooldown}</li>
        </ul>
      </div>
      <button id="move3">${move3.name}</button>
      <div id="move3Tip" class="moveTip">
        <h3>${move3.name}, <em>special</em></h3>
        <ul>
          <li>${move3.description}</li>
        </ul>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    const move1El = document.getElementById("move1");
    const move2El = document.getElementById("move2");
    const move3El = document.getElementById("move3");
    const healthBar = document.getElementById("hp");
    const battle = new Battle(selectedCharacter, selectedEnemy);

    move1El?.addEventListener("click", () => {
      const enemyMove = battle.determineEnemyMove();
      const adv = battle.determineAdv(selectedCharacter.moves[0], battle.enemy);
      alert(enemyMove.name);
      // display proper image above proper player
      // logic affects player
      // buttons is placed on cooldown, unless it is player has no moves left.
    });

    move2El?.addEventListener("click", () => {
      healthBar.setAttribute("value", "150");
      const adv = battle.determineAdv(selectedCharacter.moves[1], battle.enemy);
      const enemyMove = battle.determineEnemyMove();
      alert(enemyMove.name);
    });

    move3El?.addEventListener("click", () => {
      healthBar.setAttribute("value", "50");
      const enemyMove = battle.determineEnemyMove();
      const adv = battle.determineAdv(selectedCharacter.moves[2], battle.enemy);
      alert(enemyMove.name);
    });
  }

  renderGym() {}
}

class Player {
  constructor(characterObj) {
    this.character = characterObj;
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
  constructor(player1, enemy) {
    this.player1 = player1;
    this.enemy = enemy;
    this.roundTimer = 100;
  }

  reset() {
    this.player1.hp = this.player1.startingHp;
    this.player2.hp = this.player2.startingHp;
    this.roundTimer = 100;
  }

  determineEnemyMove() {
    const moves = this.enemy.moves;
    if (moves.every((move) => move.onCooldown)) {
      return this.enemy.moves[0];
    }
    const availableMoves = moves.filter((move) => !move.onCooldown);
    const rand = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[rand];
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
}

// Home Page Logic
const render = new Render();

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
const selectedEnemy = alvatron;
const selectedCharacter = igniKambuku;
render.renderHome();
