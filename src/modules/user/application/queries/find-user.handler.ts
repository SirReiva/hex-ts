import { IQueryHandler } from '../../../../shared/cqrs/query.handler';
import { FindUserQuery } from './find-user.query';
import { FindUserUsecase } from '../use-cases/find-user.usecase';
import { injectable } from 'inversify';

@injectable()
export class FindUserQueryHandler implements IQueryHandler<FindUserQuery> {
	constructor(private readonly findUserUseCase: FindUserUsecase) {}

	async execute(query: FindUserQuery) {
		return this.findUserUseCase.execute(query);
	}
}
