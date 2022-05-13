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
  type: "spirit",
  adv: ["physical", "dark"],
  weak: ["wind", "electric"],
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
  critChance: 10,
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
  type: "wind",
  adv: ["earth", "spirit"],
  weak: ["fire", "space"],
  cooldown: 4,
  onCool: 0,
};

// Sir Oso
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

// Alvatron
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
  type: "spirit",
  adv: ["physical", "dark"],
  weak: ["electric", "wind"],
  cooldown: 3,
  onCool: 0,
};

// Hamstronaut
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
    "Hamstronaut calls down a beam of solar energy on his opponent. The concentrated light deals 15 damage, and has a 50% chance to stun his enemy on their next turn.",
  critChance: 5,
  type: "space",
  adv: ["wind", "fire"],
  weak: ["earth", "physical"],
  cooldown: 5,
  onCool: 0,
};

// Ay Guey
const charge = {
  name: "Charge",
  ahp: "attack",
  damage: 20,
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
  damage: 30,
  critChance: 5,
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
    "Ay Guey sends a rumble of earth towards his oppenent. It deals 20 damage, and there is a 40% chance that your opponent's next move will be less effective.",
  critChance: 5,
  type: "earth",
  adv: ["space", "electric"],
  weak: ["water", "wind"],
  cooldown: 4,
  onCool: 0,
};

// T.T
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

// The Streamer
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

// Lys Du Paradis
const petalPropeller = {
  name: "Petal Propeller",
  ahp: "attack",
  damage: 20,
  critChance: 20,
  type: "wind",
  adv: ["earth", "spirit"],
  weak: ["fire", "space"],
  cooldown: 1,
  onCool: 0,
};

const photosynthesis = {
  name: "Photosynthesis",
  ahp: "heal",
  damage: 25,
  critChance: 10,
  type: "electric",
  adv: ["water", "spirit"],
  weak: ["earth", "dark"],
  cooldown: 3,
  onCool: 0,
};

const strangleRoot = {
  name: "Strangle Root",
  ahp: "special",
  damage: 30,
  description:
    "Lys Du Paradis grows beneath her opponent, bursts from the ground, and strangles the life from them. She deals 30 damage and heals 10.",
  critChance: 5,
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

const lysDuParadis = {
  name: "Lys Du Paradis",
  description: "Thrives in sunlight, as long as they had their coffee.",
  type: "plant",
  startHp: 200,
  hp: 200,
  moves: [petalPropeller, photosynthesis, strangleRoot],
};

const specialLogic = {
  Goddess: function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    if (effect) {
      const damage = ((1 + adv + crit) * move.damage) / stunMod;
      enemy.hp -= Math.floor(damage);
      return true;
    } else {
      const damage = ((1 + adv + crit) * 15) / stunMod;
      enemy.hp -= Math.floor(damage);
    }
  },
  "Fire Consumes": function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    const enemyHealthMultiplier = 0.01 * (enemy.startHp - enemy.hp);
    const damage =
      (move.damage * (1 + crit + adv + enemyHealthMultiplier)) / stunMod;
    enemy.hp -= Math.floor(damage);
  },
  "Blizzard Rush": function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 + adv + crit;
    enemy.hp -= Math.floor((move.damage * multiplier) / stunMod);
    player.hp += Math.floor((move.damage * multiplier) / stunMod);
    if (player.hp > player.startHp) {
      player.hp = player.startHp;
    }
  },
  Hibernation: function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 + adv + crit;
    player.hp += Math.floor((move.damage * multiplier) / stunMod);
    if (player.hp > player.startHp) {
      player.hp = player.startHp;
    }
  },
  "Solar Beam": function (move, adv, enemy, player, effect, enemyMove) {
    // if ignore and move name is solar beam, other player's efficiency is halved
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 + adv + crit;
    if (effect) {
      enemy.hp -= Math.floor((move.damage * multiplier) / stunMod);
      enemy.stunned = true;
    } else {
      enemy.hp -= Math.floor((move.damage * multiplier) / stunMod);
    }
  },
  "Shell Up": function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 - adv + crit;
    if (effect && enemyMove.ahp !== "heal") {
      const damageReflected = (enemyMove.damage * multiplier) / (2 * stunMod);
      enemy.hp -= Math.floor(damageReflected);
    } else if (enemyMove.ahp !== "heal") {
      const damageInflicted = (enemyMove.damage * multiplier) / 2;
      player.hp -= Math.floor(damageInflicted);
    }
  },
  "Stampede Stomp": function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 + adv + crit;
    if (effect) {
      enemy.hp -= Math.floor((move.damage * multiplier) / stunMod);
      enemy.stunned = true;
    } else {
      enemy.hp -= Math.floor((move.damage * multiplier) / stunMod);
    }
  },
  "Blood Thirsty": function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 + adv + crit;
    enemy.hp -= Math.floor((move.damage * multiplier) / stunMod);
    move.critChance += 10;
  },
  Toggle: function (move, adv, enemy, player, effect, enemyMove) {
    const randomMove = player.moves[Math.round(Math.random())];
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 3 + adv;
    const damage = (randomMove.damage * multiplier) / stunMod;
    enemy.hp -= Math.floor(damage);
  },
  "Strangle Root": function (move, adv, enemy, player, effect, enemyMove) {
    const crit = Math.floor(Math.random() * 100) <= move.critChance ? 2 : 0;
    const stunMod = player.stunned ? 2 : 1;
    if (player.stunned) {
      player.stunned = false;
    }
    let multiplier = 1 + adv + crit;
    const damage = Math.floor((move.damage * multiplier) / stunMod);
    const heal = Math.floor(((move.damage / 3) * multiplier) / stunMod);
  },
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
    const gymButton = document.getElementById("gymBtn");

    arenaButton.addEventListener("click", () => {
      this.renderArena();
    });

    gymButton.addEventListener("click", () => {
      this.renderGym();
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
      const enemyEffect = battle.checkSpecialEffect(enemyMove);
      // if we ignore this if block, that means the enemy move has stopped the players move with special
      if (!enemyEffect) {
        battle.handleMove(move1, battle.player1);
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
      } else if (
        enemyMove.name === "Stampede Stomp" ||
        enemyMove.name === "Solar Beam"
      ) {
        battle.handleMove(move1, battle.player1);
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
      }
      battle.handleEnemyMove(enemyMove, move1, battle.enemy, enemyEffect);
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
      // value of key will be function specifically for that move. Faster than running a switch every time.
      this.renderMoves();
    });

    move2El?.addEventListener("click", () => {
      const enemyMove = battle.determineEnemyMove();
      const enemyEffect = battle.checkSpecialEffect(enemyMove);
      if (!enemyEffect) {
        battle.handleMove(move2, battle.player1);
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
      } else if (
        enemyMove.name === "Stampede Stomp" ||
        enemyMove.name === "Solar Beam"
      ) {
        battle.handleMove(move2, battle.player1);
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
      }
      battle.handleEnemyMove(enemyMove, move2, battle.enemy, enemyEffect);
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
      const playerEffect = battle.checkSpecialEffect(move3);
      const enemyEffect = battle.checkSpecialEffect(enemyMove);
      if (playerEffect) {
        specialLogic[move3.name](
          move3,
          adv,
          battle.enemy,
          battle.player1,
          playerEffect,
          enemyMove
        );
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
      } else if (
        enemyEffect &&
        (enemyMove.name !== "Stampede Stomp" || enemyMove.name !== "Solar Beam")
      ) {
        battle.handleEnemyMove(enemyMove, move3, battle.enemy, enemyEffect);
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
      } else {
        specialLogic[move3.name](
          move3,
          adv,
          battle.enemy,
          battle.player1,
          playerEffect,
          enemyMove
        );
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
        battle.handleEnemyMove(enemyMove, move3, battle.enemy, enemyEffect);
        enemyHealthBar.setAttribute("value", battle.enemy.hp);
        healthBar.setAttribute("value", battle.player1.hp);
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

  renderGym() {
    const player1 = selectedCharacter;
    const move1 = selectedCharacter.moves[0];
    const move2 = selectedCharacter.moves[1];
    const move3 = selectedCharacter.moves[2];
    document.querySelector("body").innerHTML = `    <div id="workouts">
    <div class="gymMoves">
      <div id="move1Stats">
        <h1>${move1.name}</h1>
        <p>${move1.ahp.toUpperCase()}</p>
        <ul
          class="dropdown_menu dropdown_menu--animated dropdown_menu-6"
          id="move1Ul"
        >
          <li class="dropdown_item-1">
            <span class="stat-title">Move Type: </span
            >${move1.type.toUpperCase()}
          </li>
          <li class="dropdown_item-2">
            <span class="stat-title">Power: </span>${move1.damage}
          </li>
          <li class="dropdown_item-3">
            <span class="stat-title">Crit Chance: </span>${move1.critChance}%
          </li>
          <li class="dropdown_item-4">
            <span class="stat-title">Advantages: </span
            >${move1.adv[0].toUpperCase()}, ${move1.adv[1].toUpperCase()}
          </li>
          <li class="dropdown_item-5">
            <span class="stat-title">Disadvantages: </span
            >${move1.weak[0].toUpperCase()}, ${move1.weak[1].toUpperCase()}
          </li>
          <li><button id="move1Button">Train</button></li>
        </ul>
      </div>
      <div id="move2Stats">
        <h1>${move2.name}</h1>
        <p>${move2.ahp.toUpperCase()}</p>
        <ul
          class="dropdown_menu dropdown_menu--animated dropdown_menu-6"
          id="move2Ul"
        >
          <li class="dropdown_item-1">
            <span class="stat-title">Move Type: </span
            >${move2.type.toUpperCase()}
          </li>
          <li class="dropdown_item-2">
            <span class="stat-title">Power: </span>${move2.damage}
          </li>
          <li class="dropdown_item-3">
            <span class="stat-title">Crit Chance: </span>${move2.critChance}%
          </li>
          <li class="dropdown_item-4">
            <span class="stat-title">Advantages: </span
            >${move2.adv[0].toUpperCase()}, ${move2.adv[1].toUpperCase()}
          </li>
          <li class="dropdown_item-5">
            <span class="stat-title">Disadvantages: </span
            >${move2.weak[0].toUpperCase()}, ${move2.weak[1].toUpperCase()}
          </li>
          <li><button id="move2Button">Train</button></li>
        </ul>
      </div>
      <div id="move3Stats">
        <h1>${move3.name}</h1>
        <p>${move3.ahp.toUpperCase()}</p>
        <ul
          class="dropdown_menu dropdown_menu--animated dropdown_menu-6"
          id="move3Ul"
        >
          <li class="dropdown_item-1">
            <span class="stat-title">Move Type: </span
            >${move3.type.toUpperCase()}, ${move3.description}
          </li>
          <li class="dropdown_item-2">
            <span class="stat-title">Crit Chance: </span>${move3.critChance}%
          </li>
          <li class="dropdown_item-3">
            <span class="stat-title">Advantages: </span
            >${move3.adv[0].toUpperCase()}, ${move3.adv[1].toUpperCase()}
          </li>
          <li class="dropdown_item-4">
            <span class="stat-title">Disadvantages: </span
            >${move3.weak[0].toUpperCase()}, ${move3.weak[1].toUpperCase()}
          </li>
          <li><button id="move3Button">Train</button></li>
        </ul>
      </div>
    </div>
    <div class="playerContainer">
      <img
        src="./images/prodigium/akuaMoanaFront.png"
        alt="placeholder for character"
      />
      <div id="playerStats">
        <h1>${player1.name}</h1>
        <p>
          <span class="statTitle">Description: </span>${player1.description}
        </p>
        <p>
          <span class="statTitle">Type: </span>${player1.type.toUpperCase()}
        </p>
        <p><span class="statTitle">Health: </span>${player1.startHp}</p>
        <button class="workoutButton">Upgrade Health</button>
      </div>
    </div>
  </div>
  <button id="backBtn">&lt; Back</button>`;
    const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", () => {
      this.renderHome();
    });

    const move1El = document.getElementById("move1Ul");
    const move2El = document.getElementById("move2Ul");
    const move3El = document.getElementById("move3Ul");

    if (move1.ahp === "attack") {
      move1El.classList.add("attack");
    } else if (move1.ahp === "heal") {
      move1El.classList.add("heal");
    } else {
      move1El.classList.add("special");
    }
    if (move2.ahp === "attack") {
      move2El.classList.add("attack");
    } else if (move2.ahp === "heal") {
      move2El.classList.add("heal");
    } else {
      move2El.classList.add("special");
    }
    if (move3.ahp === "attack") {
      move3El.classList.add("attack");
    } else if (move3.ahp === "heal") {
      move3El.classList.add("heal");
    } else {
      move3El.classList.add("special");
    }

    const playerStatsEl = document.getElementById("playerStats");

    switch (player1.type) {
      case "water":
        playerStatsEl.style.backgroundColor = "lightblue";
        break;
      case "fire":
        playerStatsEl.style.backgroundColor = "#FF7F7F";
        //light red
        break;
      case "plant":
        playerStatsEl.style.backgroundColor = "lightgreen";
        break;
      case "electric":
        playerStatsEl.style.backgroundColor = "lightyellow";
        break;
      case "earth":
        playerStatsEl.style.backgroundColor = "tan";
        break;
      case "space":
        playerStatsEl.style.backgroundColor = "#CBC3E3";
        //light purple
        break;
      case "wind":
        playerStatsEl.style.backgroundColor = "whitesmoke";
        break;
      case "physical":
        playerStatsEl.style.backgroundColor = "#fed4a7";
        //light orange
        break;
      case "dark":
        playerStatsEl.style.backgroundColor = "lightgray";
        break;
      case "spirit":
        playerStatsEl.style.backgroundColor = "powderblue";
        break;
      default:
        playerStatsEl.style.backgroundColor = "white";
        break;
    }

    const renderSlider = (level) => {
      if (level > 3) {
        //display success and move growth somehow.
        this.renderGym();
      } else {
        let greenZoneWidth;
        if (level === 1) {
          greenZoneWidth = "200";
        } else if (level === 2) {
          greenZoneWidth = "100";
        } else {
          greenZoneWidth = "50";
        }
        level++;
        const greenZonePosition = 10 + Math.floor(Math.random() * 70);
        document.querySelector("body").innerHTML = `
        <h1 style="text-align: center; margin-top:100px;">Click when ready...</h1>
        <div id="training_container">
        <div id="training_bar">
        <div id="success_zone" style="width: ${greenZoneWidth}px; left:${greenZonePosition}%;"></div>
        <div id="training_slider" class="backForth"></div>
        </div>
        </div>`;
        const mouseDownListener = (e) => {
          e.preventDefault();
          e.stopPropagation(); b
          const sliderEl = document.getElementById("training_slider");
          sliderEl.style.animationPlayState = "paused";
          const successZoneEl = document.getElementById("success_zone");
          const leftSlider = sliderEl.getBoundingClientRect().left;
          const rightSlider = sliderEl.getBoundingClientRect().right;
          const leftSuccessZone = successZoneEl.getBoundingClientRect().left;
          const rightSuccessZone = successZoneEl.getBoundingClientRect().right;
          if (leftSlider > leftSuccessZone && leftSlider < rightSuccessZone) {
            setTimeout(() => {
              document.querySelector("body").innerHTML = "";
              renderSlider(level);
            }, 1000);
          } else if (
            rightSlider > leftSuccessZone &&
            rightSlider < rightSuccessZone
          ) {
            setTimeout(() => {
              document.querySelector("body").innerHTML = "";
              renderSlider(level);
            }, 1000);
          } else {
            console.log("failure");
            document.removeEventListener("mousedown", mouseDownListener);
            this.renderGym();
          }
        };
        document.addEventListener("mousedown", mouseDownListener);
      }
    };

    document.getElementById("move1Button").addEventListener("click", (e) => {
      renderSlider(1, 400);
    });

    const renderSimonSays = () => {
      //render 4 html buttons with black backgrounds, and ids according to the color they will be
      //couple seconds timeout
      //generate array, length 10, with random strings red, blue, yellow, green
      //function that lights up buttons according to array and listens for clicks, if clicks match
      //then it continues, if not then it stops. Getting the timing on this is going to be difficult
      //I think it will be easier to have functions that will run for each step and listen for clicks
      //outside of that
      document.querySelector("body").innerHTML = `
      <button id="red" class="simonButton"></button>
      <div id="simonFlex">
      <button id="blue" class="simonButton"></button>
      <button id="green" class="simonButton"></button>
      </div>
      <button id="yellow" class="simonButton"></button>
      `;

      const counter = 0;

      document.getElementById("#red").addEventListener("click", () => {
        console.log("hello");
      });
      document.getElementById("#blue").addEventListener("click", () => {
        console.log("hello");
      });
      document.getElementById("#green").addEventListener("click", () => {
        console.log("hello");
      });
      document.getElementById("#yellow").addEventListener("click", () => {
        console.log("hello");
      });
    };

    const generateRandomColors = () => {
      const colors = ["red", "blue", "yellow", "green"];
      const randomColors = [];
      for (let i = 0; i < 10; i++) {
        const pickedColor = colors[Math.floor(Math.random() * colors.length)];
        randomColors.push(pickedColor);
      }
      return randomColors;
    };
  }
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

  handleMove(move, player) {
    // Player move handler
    const adv = this.determineAdv(move);
    const crit = Math.floor(Math.random() * 100);
    let stunMod = player.stunned ? 2 : 1;
    this.fixStun(player);
    if (move.ahp === "attack") {
      let multiplier = 1 + adv;
      if (crit < move.critChance) {
        multiplier += 2;
      }
      const damage = (move.damage * multiplier) / stunMod;
      this.enemy.hp -= Math.floor(damage);
    } else if (move.ahp === "heal") {
      let multiplier = 1 + adv;
      if (crit < move.critChance) {
        multiplier += 2;
      }
      const heal = (move.damage * multiplier) / stunMod;
      this.player1.hp += Math.floor(heal);
      if (this.player1.hp > this.player1.startHp) {
        this.player1.hp = this.player1.startHp;
      }
    }
  }

  handleEnemyMove(move, playerMove, enemy, effect) {
    const enemyAdv = this.determineEnemyAdv(move);
    const enemyCrit = Math.floor(Math.random() * 100);
    let stunMod = enemy.stunned ? 2 : 1;
    this.fixStun(enemy);
    if (move.ahp === "attack") {
      let multiplier = 1 + enemyAdv;
      if (enemyCrit < move.critChance) {
        multiplier += 2;
      }
      const damage = (move.damage * multiplier) / stunMod;
      this.player1.hp -= Math.floor(damage);
    } else if (move.ahp === "heal") {
      let multiplier = 1 + enemyAdv;
      if (enemyCrit < move.critChance) {
        multiplier += 2;
      }
      const heal = (move.damage * multiplier) / stunMod;
      this.enemy.hp += Math.floor(heal);
      if (this.enemy.hp > this.enemy.startHp) {
        this.enemy.hp = this.enemy.startHp;
      }
    } else if (move.ahp === "special") {
      specialLogic[move.name](
        move,
        enemyAdv,
        this.player1,
        this.enemy,
        effect,
        playerMove
      );
    }
  }

  checkSpecialEffect(move) {
    if (move.ahp === "special") {
      switch (move.name) {
        case "Goddess":
          if (Math.floor(Math.random() * 100) < 1) {
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
          if (Math.floor(Math.random() * 100) < 40) {
            return true;
          }
          return false;
      }
    }
    return false;
  }

  fixStun(player) {
    if (player.stunned) {
      player.stunned = false;
    }
  }
}

// Home Page Logic
const render = new Render();

const selectedEnemy = alvatron;
const selectedCharacter = akuaMoana;
render.renderGym();
