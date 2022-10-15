import Character from '../app';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('testing hero definition', () => {
	function parentHeroNameError() {
		const hero = new Character('e', 'name error type');
		return hero;
	}

	function parentHeroTypeError() {
		const hero = new Character('ErrorMan', 'error type');
		return hero;
	}

	expect(parentHeroNameError).toThrow('NAME error');
	expect(parentHeroTypeError).toThrow('TYPE error');

	expect(new Bowerman('TestMan', 'Bowerman')).toBeDefined();
	expect(new Swordsman('TestMan', 'Swordsman')).toBeDefined();
	expect(new Magician('TestMan', 'Magician')).toBeDefined();
	expect(new Daemon('TestMan', 'Daemon')).toBeDefined();
	expect(new Undead('TestMan', 'Undead')).toBeDefined();
	expect(new Zombie('TestMan', 'Zombie')).toBeDefined();
});

test('testing hero actions', () => {
	function heroLevelUp(health = 0) {
		const hero = new Character('TestMan', 'Daemon', health, 0, 100, 100);
		hero.levelUp();
		return [hero.health, hero.level, hero.attack, hero.defence];
	}

	const levelUpSuccess = heroLevelUp(1);
	expect(levelUpSuccess).toEqual([100, 1, 120, 120]);
	expect(heroLevelUp).toThrow('LevelUp error');

	function heroDamage(health = -1) {
		const hero = new Character('TestMan', 'Daemon', health, 0, 100, 50);
		hero.damage(2);
		return hero.health;
	}

	const damageSuccess = heroDamage(1);
	expect(damageSuccess).toEqual(0);
	expect(heroDamage).toThrow('Damage error');
});
