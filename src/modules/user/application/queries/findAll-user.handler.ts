import { injectable } from 'inversify';
import { IQueryHandler } from '../../../../shared/cqrs/query.handler';
import { FindAllUserUsecase } from '../use-cases/findAll-user.usecase';
import { FindAllUserQuery } from './findAll-user.query';

@injectable()
export class FindAllUserQueryHandler
	implements IQueryHandler<FindAllUserQuery> {
	constructor(private readonly findAllUserUseCase: FindAllUserUsecase) {}

	async execute(query: FindAllUserQuery) {
		return this.findAllUserUseCase.execute(query);
	}
}
