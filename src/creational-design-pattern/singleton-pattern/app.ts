import { StatsTracker } from './static_tracker';
import test from './test';

let tracker = StatsTracker.instance;

tracker.instaShares = 20;
tracker.likesCount = 100;
tracker.twitterShares = 10;

console.log(`Insta shares ${tracker.instaShares}`);
console.log(`Likes Count ${tracker.likesCount}`);
console.log(`Twitter shares ${tracker.twitterShares}`);

test();
