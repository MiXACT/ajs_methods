export default class Character {
	constructor(name, type, health = 100, level = 1, attack, defence) {
		const characterTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (name.length < 2 || name.length > 10) {
			throw new Error('NAME error');
		} else {
			this.name = name;
		}
		if (!characterTypes.includes(type)) {
			throw new Error('TYPE error');
		} else {
			this.type = type;
		}
		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;
	}

	levelUp(power = 1.2) {
		if (this.health > 0) {
			this.level += 1;
			this.attack *= power;
			this.defence *= power;
			this.health = 100;
		} else throw new Error('LevelUp error');
	}

	damage(points) {
		if (this.health >= 0) {
			this.health -= points * (1 - this.defence / 100);
		} else throw new Error('Damage error');
	}
}
