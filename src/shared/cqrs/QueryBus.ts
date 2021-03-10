import { Instanciable } from '../utils/intanciable.interface';
import { IQuery } from './query.interface';
import { IQueryHandler } from './query.handler';
import { injectable } from 'inversify';
import { IResponse } from '../application/IResponse';

@injectable()
export class QueryBus<QueryBase extends IQuery = IQuery> {
	private queryMap: Map<string, IQueryHandler<QueryBase>> = new Map();

	async execute<R extends IResponse, S extends QueryBase>(
		query: S
	): Promise<R> {
		const instance = this.queryMap.get(query.constructor.name);
		if (!instance) throw new Error('Not handler');

		return await instance.execute(query);
	}

	register(query: Instanciable<QueryBase>, handler: IQueryHandler<QueryBase>) {
		this.queryMap.set(query.name, handler);
	}
}
