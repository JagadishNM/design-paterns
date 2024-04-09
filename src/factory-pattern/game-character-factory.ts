import { GameCharacter } from './game-character.interface';

export class GameCharactersFactory {
	public static getWarrior(level: number): GameCharacter {
		let warrior: GameCharacter;
		if (level < 10) {
			warrior = {
				strength: 12,
				dexterity: 10,
				health: 12,
				magic: 0,
			};
		} else {
			warrior = {
				strength: 20,
				dexterity: 15,
				health: 18,
				magic: 0,
			};
		}

		return warrior;
	}

	public static getMage(level: number): GameCharacter {
		let mage: GameCharacter;
		if (level < 10) {
			mage = {
				strength: 12,
				dexterity: 10,
				health: 12,
				magic: 0,
			};
		} else {
			mage = {
				strength: 20,
				dexterity: 15,
				health: 18,
				magic: 0,
			};
		}

		return mage;
	}
}
