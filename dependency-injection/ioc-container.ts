export class IOCContainer {
	private static _instance: IOCContainer = new IOCContainer();
	private _dependencies: { [key: string]: object } = {};

	constructor() {
		if (IOCContainer._instance) {
			throw new Error('Signleton class cannot be instantiate using new');
		}

		IOCContainer._instance = this;
	}

	public static get instance(): IOCContainer {
		return IOCContainer._instance;
	}

	register(name: string, dependencies: string[], implementation: any) {
		if (this._dependencies[name]) {
			throw new Error('dependency already registered');
		}

		let dependencyImplementations: any =
			this.getDependenciesImplementations(dependencies);
		this._dependencies[name] = new implementation(
			...dependencyImplementations
		);
	}

	resolve<T>(name: string): T {
		if (!this._dependencies[name]) {
			throw new Error(`Unresolved dependency ${name}`);
		}
		return this._dependencies[name] as T;
	}

	private getDependenciesImplementations(names: string[]): object {
		return names.map((name) => this.resolve(name));
	}
}
