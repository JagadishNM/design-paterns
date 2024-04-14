interface Iphone {
	useLighteningCable: () => void;
}

interface Android {
	useMicroUsbCable: () => void;
}

class Iphone12 implements Iphone {
	useLighteningCable() {
		console.log('using lightening cable');
	}
}

class GooglePixel implements Android {
	useMicroUsbCable() {
		console.log('using micrp USB cable');
	}
}

class LighteningToMicroUsbAdaptor implements Android {
	iphone: Iphone;
	constructor(iphone: Iphone) {
		this.iphone = iphone;
	}
	useMicroUsbCable() {
		this.iphone.useLighteningCable();
	}
}

let iphone = new Iphone12();

let convert = new LighteningToMicroUsbAdaptor(iphone);

console.log(convert.useMicroUsbCable());
