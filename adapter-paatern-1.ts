// Adapter

class OldSystem {
	specificMethod() {
		console.log('old syatem');
	}
}

class TargetInterface {
	requireMethod() {}
}

class Adaptor extends TargetInterface {
	oldSystem: any;

	constructor(oldSystem) {
		super();
		this.oldSystem = oldSystem;
	}

	requireMethod() {
		this.oldSystem.specificMethod();
	}
}

let adaptor = new Adaptor(new OldSystem());
console.log(adaptor.requireMethod);
