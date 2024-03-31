// Singleton class

export class StatsTracker {
	likesCount: number = 0;
	twitterShares: number = 0;
	instaShares: number = 0;

	private static _instance: StatsTracker = new StatsTracker();

	// to throw if instance already exisys and initiating with new keyword
	constructor() {
		if (StatsTracker._instance) {
			throw new Error('cannot initialize single instance class using new');
		}

		StatsTracker._instance = this;
	}

	// can prevent to intialize class with new keyword by making constructor private
	// private constructor() {}

	public static get instance(): StatsTracker {
		return StatsTracker._instance;
	}
}
