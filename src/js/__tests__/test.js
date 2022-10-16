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

	expect(new Bowerman('TestMan')).toBeDefined();
	expect(new Swordsman('TestMan')).toBeDefined();
	expect(new Magician('TestMan')).toBeDefined();
	expect(new Daemon('TestMan')).toBeDefined();
	expect(new Undead('TestMan')).toBeDefined();
	expect(new Zombie('TestMan')).toBeDefined();
});

test('testing hero actions', () => {
	function heroLevelUp(health = 0, attack = 100, defence = 100) {
		const hero = new Character('TestMan', 'Daemon');
		hero.health = health;
		hero.attack = attack;
		hero.defence = defence;
		hero.levelUp();
		return [hero.health, hero.level, hero.attack, hero.defence];
	}

	const levelUpSuccess = heroLevelUp(1);
	expect(levelUpSuccess).toEqual([100, 2, 120, 120]);
	expect(heroLevelUp).toThrow('LevelUp error');

	function heroDamage(health = -1, attack = 100, defence = 50) {
		const hero = new Character('TestMan', 'Daemon');
		hero.health = health;
		hero.attack = attack;
		hero.defence = defence;
		hero.damage(2);
		return hero.health;
	}

	const damageSuccess = heroDamage(1);
	expect(damageSuccess).toEqual(0);
	expect(heroDamage).toThrow('Damage error');
});
