class Tv {
	turnOn() {
		console.log('Turn on tv');
	}

	turnOff() {
		console.log('Turn off tv');
	}
}

class HomeTheater {
	turnOn() {
		console.log('Turn on HomeTheater');
	}

	turnOff() {
		console.log('Turn off HomeTheater');
	}
}

class HomeTheaterFacade {
	tv: Tv;
	homeTheater: HomeTheater;
	constructor(tv: Tv, homeTheater: HomeTheater) {
		this.tv = tv;
		this.homeTheater = homeTheater;
	}

	watchMovie() {
		this.tv.turnOn();
		this.homeTheater.turnOn();
	}

	endMovie() {
		this.tv.turnOff();
		this.homeTheater.turnOff();
	}
}

let tv = new Tv();
let homeTheater = new HomeTheater();

let homeTheaterFacade = new HomeTheaterFacade(tv, homeTheater);
homeTheaterFacade.watchMovie();
homeTheaterFacade.endMovie();
