import { IQuery } from './query.interface';

export interface IQueryHandler<T extends IQuery> {
	execute(query: T): Promise<any>;
}
