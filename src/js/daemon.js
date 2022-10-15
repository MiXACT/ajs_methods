import Character from './app';

export default class Daemon extends Character {
	constructor(name, type, health, level, attack = 10, defence = 40) {
		super(name, type, health, level, attack, defence);
	}
}
