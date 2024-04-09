import { GameCharactersFactory } from './game-character-factory';

let warrior = GameCharactersFactory.getWarrior(8);
let mage = GameCharactersFactory.getWarrior(12);

console.log('warrior', warrior);
console.log('mage', mage);
