/* eslint-disable no-unused-vars, no-throw-literal*/
/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.isDefeated = function () {
  return this.health <= 0;
};

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

const simulateBattle = (Pokemon1, Pokemon2, firstAttack) => {
  let attacker;
  let defender;
  if (Pokemon1.name === firstAttack) {
    attacker = Pokemon1;
    defender = Pokemon2;
  } else {
    attacker = Pokemon2;
    defender = Pokemon1;
  }

  while (true) {
    defender.health -= attacker.biteAttack();
    if (defender.isDefeated()) {
      return `${attacker.name} Wins!`;
    }

    [attacker, defender] = [defender, attacker];
  }
};