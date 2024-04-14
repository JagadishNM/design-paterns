abstract class UIFactory {
	abstract createButton(): void;

	abstract createInputField(): void;
}

class LightTheme extends UIFactory {
	createButton(): LightThemeButton {
		return new LightThemeButton();
	}
	createInputField(): any {
		throw new Error('Method not implemented.');
	}
}

class DarkTheme extends UIFactory {
	createButton(): DarkThemeButton {
		return new DarkThemeButton();
	}
	createInputField(): any {
		throw new Error('Method not implemented.');
	}
}

class Button {}

class LightThemeButton extends Button {
	constructor() {
		super();
		console.log('Light theme button created');
	}
}

class DarkThemeButton extends Button {
	constructor() {
		super();
		console.log('Dark theme button created');
	}
}

const lightTheme = new LightTheme();
console.log(lightTheme.createButton());

const darkTheme = new DarkTheme();
console.log(darkTheme.createButton());
