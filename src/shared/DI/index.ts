import { Container } from 'inversify';

export class DI {
	private static instance: Container;

	static getInstace() {
		if (!DI.instance) DI.instance = new Container();
		return DI.instance;
	}
}
