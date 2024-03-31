import { StatsTracker } from './static_tracker';

export default function test() {
	let tracker = StatsTracker.instance;

	tracker.instaShares += 10;
	tracker.likesCount += 100;

	console.log(`Insta shares ${tracker.instaShares}`);
	console.log(`Likes Count ${tracker.likesCount}`);
	console.log(`Twitter shares ${tracker.twitterShares}`);
}
