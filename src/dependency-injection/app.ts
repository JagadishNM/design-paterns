import { IOCContainer, Register } from './ioc-container';

interface IDepA {
	doA(): void;
}

interface IDepB {
	doB(): void;
}

interface IDepC {
	doC(): void;
}

@Register('IDepA', [])
class ConcreteA implements IDepA {
	doA(): void {
		console.log('Doing A');
	}
}

@Register('IDepB', [])
class ConcreteB implements IDepB {
	doB(): void {
		console.log('Doing B');
	}
}

//@Register('IDepC', ['IDepA', 'IDepB'])
class ConcreteC implements IDepC {
	constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}
	doC(): void {
		this._concreteA.doA();
		this._concreteB.doB();
		console.log('Doing C');
	}
}

let container = IOCContainer.instance;

// container.register('IDepA', [], ConcreteA);
// container.register('IDepB', [], ConcreteB);
 container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);

// console.log(container);
console.log(ConcreteA);
console.log(ConcreteB);

let a = container.resolve<IDepA>('IDepA');
a.doA();
let b = container.resolve<IDepB>('IDepB');
b.doB();
let c = container.resolve<IDepC>('IDepC');
c.doC();
