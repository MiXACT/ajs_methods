import Character from './app';

export default class Zombie extends Character {
	constructor(name, type, health, level, attack = 40, defence = 10) {
		super(name, type, health, level, attack, defence);
	}
}
