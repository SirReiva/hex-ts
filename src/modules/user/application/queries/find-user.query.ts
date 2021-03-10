import { IQuery } from '../../../../shared/cqrs/query.interface';

export class FindUserQuery implements IQuery {
	constructor(public readonly id: string) {}
}
