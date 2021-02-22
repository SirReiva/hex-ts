import { IQuery } from './IQuery';
import { ObservableBus } from './ObservableBus';

export type Instanciable<T> = {
	new (...args: any[]): T;
};

export class QueryBus<T extends Instanciable<IQuery>> extends ObservableBus<T> {
	execute<T extends Instanciable<IQuery>>(query: T) {
		const name = this.getQueryName(query);
	}

	private getQueryName(query: Function): string {
		const { constructor } = Object.getOwnPropertySymbols(query);
		return constructor.name.toString();
	}
}
