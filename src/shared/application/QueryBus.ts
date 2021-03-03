import { Instanciable } from '../utils/intanciable.interface';
import { IQuery } from './IQuery';
import { IQueryHander } from './IQueryHandler';
import { ObservableBus } from './ObservableBus';

export class QueryBus<T extends Instanciable<IQuery>> extends ObservableBus<T> {
	execute<T extends Instanciable<IQuery>>(query: T) {
		const name = this.getNameByClass(query);
	}

	private getNameByClass(query: Function): string {
		const { constructor } = Object.getPrototypeOf(query);
		return constructor.name.toString();
	}

	register(query: T, handler: Instanciable<IQueryHander<T>>) {}
}
