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
  onCool: 0,
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
  onCool: 0,
};

const goddess = {
  name: "Goddess",
  ahp: "special",
  damage: 10,
  description:
    "Akua Moana calls on her ancestors for assistance. 75% oppenent's move misses and they take 10 damage. If not ignored, they are punished by the gods and receive 15 damage.",
  critChance: 75,
  type: "spirit",
  adv: ["physical", "dark"],
  weak: ["wind", "electric"],
  cooldown: 4,
  onCool: 0,
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
  onCool: 0,
};

const phoenix = {
  name: "Phoenix",
  ahp: "heal",
  damage: 25,
  critChance: 10,
  type: "fire",
  adv: ["wind", "plant"],
  weak: ["water", "space"],
  cooldown: 2,
  onCool: 0,
};

const fireConsumes = {
  name: "Fire Consumes",
  ahp: "special",
  damage: 20,
  description:
    "Igni Kambuku preys on his opponent's weakness. The weaker the opponent, the more the fire burns.",
  critChance: 5,
  type: "fire",
  adv: ["wind", "plant"],
  weak: ["water", "space"],
  cooldown: 3,
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
};

const blizzardRush = {
  name: "Blizzard Rush",
  ahp: "special",
  lifesteal: 20,
  description:
    "The Yeti rushes at his enemies with a blizzard at his back. He uses dark magic to squeeze 20 hp from his opponent and claim it for himself.",
  critChance: 1,
  type: "dark",
  adv: ["physical", "electric"],
  weak: ["plant", "spirit"],
  cooldown: 4,
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
};

const shockWave = {
  name: "Shock Wave",
  ahp: "attack",
  damage: 25,
  critChance: 10,
  type: "electric",
  adv: ["water", "spirit"],
  weak: ["dark", "earth"],
  cooldown: 1,
  onCool: 0,
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
  onCool: 0,
};

const shellUp = {
  name: "Shell Up",
  ahp: "special",
  damage: 0,
  description:
    "Alvatron takes cover in his shell. 60% chance he will reflect half of his opponent's attack back, otherwise he only takes half the damage.",
  critChance: 5,
  type: "earth",
  adv: ["space", "electric"],
  weak: ["water", "wind"],
  cooldown: 3,
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
};

const solarBeam = {
  name: "Solar Beam",
  ahp: "special",
  damage: 20,
  description:
    "Hamstronaut calls down a beam of solar energy on his opponent. The concentrated light deals 20 damage, and has a 50% chance to stun his enemy on for their turn.",
  critChance: 5,
  type: "space",
  adv: ["wind", "fire"],
  weak: ["earth", "physical"],
  cooldown: 5,
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
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
  onCool: 0,
};

const downUpUpXOO = {
  name: "Down-Up-Up-X-O-O",
  ahp: "attack",
  damage: 15,
  critChance: 25,
  type: "dark",
  adv: ["physical", "electric"],
  weak: ["plant", "spirit"],
  cooldown: 1,
  onCool: 0,
};

const subEmotes = {
  name: "Sub Emotes",
  ahp: "attack",
  damage: 20,
  critChance: 5,
  type: "fire",
  adv: ["plant", "wind"],
  weak: ["water", "space"],
  cooldown: 2,
  onCool: 0,
};

const toggle = {
  name: "Toggle",
  ahp: "special",
  damage: 20,
  description:
    "Streamer toggles on his hacks, he automatically loses 10 respect (hp), but deals a critical of one of his attacks.",
  critChance: 100,
  type: "electric",
  adv: ["water", "spirit"],
  weak: ["dark", "earth"],
  cooldown: 4,
  onCool: 0,
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
  startHp: 175,
  hp: 175,
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
  startHp: 200,
  hp: 200,
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

const streamer = {
  name: "Streamer",
  description: "Pretty good at throwing hatchets...virtual hatchets.",
  type: "electric",
  startHp: 200,
  hp: 200,
  moves: [downUpUpXOO, subEmotes, toggle],
};

const specialLogic = {
  Goddess: function (move, adv, enemy, player) {
    const crit = Math.floor(Math.random() * 100) < move.critChance ? 2 : 0;
    const ignoreChance = Math.floor(Math.random() * 100);
    if (ignoreChance <= 80) {
      const damage = (1 + adv + crit) * 10;
      enemy.hp -= damage;
      return true;
    } else {
      const damage = (1 + adv + crit) * 15;
      enemy.hp -= math.floor(damage);
      return false;
    }
  },
  "Fire Consumes": function (move, adv, enemy, player) {
    const crit = Math.floor(Math.random() * 100) < move.critChance ? 2 : 0;
    const enemyHealthMultiplier = 0.01 * (enemy.startHp - enemy.hp);
    const damage = move.damage(1 + crit + adv + enemyHealthMultiplier);
    enemy.hp -= Math.floor(damage);
    return false;
  },
  "Blizzard Rush": function (move, adv, enemy, player) {
    const crit = Math.floor(Math.random() * 100) < move.critChance ? 2 : 0;
    let multiplier = 1 + adv + crit;
    enemy.hp -= 20 * multiplier;
    player.hp += 20 * multiplier;
    return false;
  },
  Hibernation: function (move, adv, enemy, player) {
    const crit = Math.floor(Math.random() * 100) < move.critChance ? 2 : 0;
    let multiplier = 1 + adv + crit;
    player.hp += 10 * multiplier;
    const ignoreChance = Math.floor(Math.random() * 100);
    if (ignoreChance < 80) {
      return true;
    }
    return false;
  },
  "Solar Beam": function (move, adv, enemy, player) {
    // if ignore and move name is solar beam, other player's efficiency is halved
  },
  "Shell Up": function (move, adv, enemy, player) {},
  "Stampede Stomp": function (move, adv, enemy, player) {},
  "Blood Thirsty": function (move, adv, enemy, player) {},
  Toggle: function (move, adv, enemy, player) {},
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
      ".moveBox"
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
          <li>${move3.description}</li>
        </ul>
      </div>`;

    const move1El = document.getElementById("move1");
    const move2El = document.getElementById("move2");
    const move3El = document.getElementById("move3");
    const healthBar = document.getElementById("hp");
    const enemyHealthBar = document.getElementById("enemyHP");
    const battle = new Battle(selectedCharacter, selectedEnemy);

    move1.onCool
      ? (document.getElementById("move1").disabled = true)
      : (document.getElementById("move1").disabled = false);

    move2.onCool
      ? (document.getElementById("move2").disabled = true)
      : (document.getElementById("move2").disabled = false);

    move3.onCool
      ? (document.getElementById("move3").disabled = true)
      : (document.getElementById("move3").disabled = false);

    move1El?.addEventListener("click", () => {
      const enemyMove = battle.determineEnemyMove();
      battle.handleMove(move1);
      battle.handleEnemyMove(enemyMove);
      enemyHealthBar.setAttribute("value", battle.enemy.hp);
      healthBar.setAttribute("value", battle.player1.hp);

      if (move2.onCool > 1 && move3.onCool > 1) {
        move1.onCool = 0;
      } else {
        move1.onCool = move1.cooldown;
      }
      if (move2.onCool) {
        move2.onCool--;
      }
      if (move3.onCool) {
        move3.onCool--;
      }
      // create object with key values of special move name, and specific logic for that move
      // for each enemy move, run switch case to find type, and run logic accordingly
      // for player move 1 and 2 run switch for attack vs. heal and run logic accordingly
      // for player move 3, call object with move name as key i.e. specialMoves[goddess],
      // value of key will be function specifically for that move. F aster than running a switch every time.
      this.renderMoves();
    });

    move2El?.addEventListener("click", () => {
      const enemyMove = battle.determineEnemyMove();
      battle.handleMove(move2);
      battle.handleEnemyMove(enemyMove);
      enemyHealthBar.setAttribute("value", battle.enemy.hp);
      healthBar.setAttribute("value", battle.player1.hp);

      move2.onCool = move2.cooldown;
      if (move1.onCool) {
        move1.onCool--;
      }
      if (move3.onCool) {
        move3.onCool--;
      }
      this.renderMoves();
    });

    move3El?.addEventListener("click", () => {
      const enemyMove = battle.determineEnemyMove();
      const adv = battle.determineAdv(move3);
      const ignore = specialLogic[move3.name](
        move3,
        adv,
        battle.enemy,
        battle.player1
      );
      if (!ignore) {
        battle.handleEnemyMove(enemyMove);
      }
      move3.onCool = move3.cooldown;
      if (move1.onCool) {
        move1.onCool--;
      }
      if (move2.onCool) {
        move2.onCool--;
      }
      this.renderMoves();
    });
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

    this.renderMoves();
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
    if (moves.every((move) => move.onCool)) {
      return this.enemy.moves[0];
    }
    const availableMoves = moves.filter((move) => !move.onCool);
    const rand = Math.floor(Math.random() * availableMoves.length);
    moves.forEach((move) => {
      if (move.name === availableMoves[rand].name) {
        move.onCool = move.cooldown;
      } else {
        if (move.onCool) {
          move.onCool--;
        }
      }
    });
    return availableMoves[rand];
  }

  determineAdv(move) {
    if (move.adv.includes(this.enemy.type)) {
      return 0.25;
    } else if (move.weak.includes(this.enemy.type)) {
      return -0.25;
    } else {
      return 0;
    }
  }

  determineEnemyAdv(move) {
    if (move.adv.includes(this.player1.type)) {
      return 0.25;
    } else if (move.weak.includes(this.player1.type)) {
      return -0.25;
    } else {
      return 0;
    }
  }

  handleMove(move) {
    // Player move handler
    const adv = this.determineAdv(move);
    const crit = Math.floor(Math.random() * 100);
    if (move.ahp === "attack") {
      let multiplier = 1 + adv;
      if (crit < move.critChance) {
        multiplier += 2;
      }
      const damage = move.damage * multiplier;
      this.enemy.hp -= Math.floor(damage);
    } else if (move.ahp === "heal") {
      let multiplier = 1 + adv;
      if (crit < move.critChance) {
        multiplier += 2;
      }
      const heal = move.damage * multiplier;
      this.player1.hp += math.floor(heal);
      if (this.player1.hp > this.player1.startHp) {
        this.player1.hp = this.player1.startHp;
      }
    }
  }

  handleEnemyMove(move) {
    const enemyAdv = this.determineEnemyAdv(move);
    const enemyCrit = Math.floor(Math.random() * 100);
    if (move.ahp === "attack") {
      let multiplier = 1 + enemyAdv;
      if (enemyCrit < move.critChance) {
        multiplier += 2;
      }
      const damage = move.damage * multiplier;
      this.player1.hp -= math.floor(damage);
    } else if (move.ahp === "heal") {
      let multiplier = 1 + enemyAdv;
      if (enemyCrit < move.critChance) {
        multiplier += 2;
      }
      const heal = move.damage * multiplier;
      this.enemy.hp += math.floor(heal);
      if (this.enemy.hp > this.enemy.startHp) {
        this.enemy.hp = this.enemy.startHp;
      }
    } else if (move.ahp === "special") {
      const ignore = specialLogic[move.name](
        move3,
        adv,
        this.player1,
        this.enemy
      );
    }
  }

  checkSpecialEffect(move) {
    if (move.ahp === "special") {
      switch (move.name) {
        case "Goddess":
          if (Math.floor(Math.random() * 100) < 75) {
            return true;
          }
          return false;
        case "Hibernation":
          if (Math.floor(Math.random() * 100) < 80) {
            return true;
          }
          return false;
        case "Solar Beam":
          if (Math.floor(Math.random() * 100) < 50) {
            return true;
          }
          return false;
        case "Shell Up":
          if (Math.floor(Math.random() * 100) < 60) {
            return true;
          }
          return false;
        case "Stampede Stomp":
          if (Math.floor(Math.random() * 100) < 60) {
            return true;
          }
          return false;
      }
    }
    return false;
  }
}

// Home Page Logic
const render = new Render();

const selectedEnemy = alvatron;
const selectedCharacter = akuaMoana;
render.renderHome();
