import { ContainerModule, interfaces } from 'inversify';
import { CommandBus } from '../../shared/cqrs/CommandBus';
import { QueryBus } from '../../shared/cqrs/QueryBus';
import { DI } from '../../shared/DI';
import { IModule } from '../../shared/DI/module.interface';
import { RegisterUserCommand } from './application/commands/register-user.command';
import { RegisterUserCommandHandler } from './application/commands/register-user.handler';
import { FindUserQueryHandler } from './application/queries/find-user.handler';
import { FindUserQuery } from './application/queries/find-user.query';
import { FindAllUserQueryHandler } from './application/queries/findAll-user.handler';
import { FindAllUserQuery } from './application/queries/findAll-user.query';
import { FindUserUsecase } from './application/use-cases/find-user.usecase';
import { FindAllUserUsecase } from './application/use-cases/findAll-user.usecase';
import { RegisterUserUseCase } from './application/use-cases/register-user.usecas';
import { DIUserRepository } from './domain/user.repository';
import { InMemoryUserRepository } from './infrastructure/db/inmemory-user.repository';
import './infrastructure/rest/userGet.controller';
import './infrastructure/rest/userGetAll.controller';
import './infrastructure/rest/userPost.controller';

export const UserModule: IModule = {
	container: new ContainerModule(
		(
			bind: interfaces.Bind,
			unbind: interfaces.Unbind,
			isBound: interfaces.IsBound,
			rebind: interfaces.Rebind
		) => {
			bind(DIUserRepository).to(InMemoryUserRepository).inSingletonScope();
			bind(CommandBus).toSelf().inSingletonScope();
			bind(QueryBus).toSelf().inSingletonScope();
			bind(RegisterUserCommandHandler).toSelf();
			bind(FindUserQueryHandler).toSelf();
			bind(FindAllUserQueryHandler).toSelf();
			bind(FindAllUserUsecase).toSelf();
			bind(FindUserUsecase).toSelf();
			bind(RegisterUserUseCase).toSelf();
		}
	),
	onload: () => {
		const commandBus: CommandBus = DI.getInstace().get(CommandBus);
		const queryBus: QueryBus = DI.getInstace().get(QueryBus);
		commandBus.register(
			RegisterUserCommand,
			DI.getInstace().get(RegisterUserCommandHandler)
		);
		queryBus.register(FindUserQuery, DI.getInstace().get(FindUserQueryHandler));
		queryBus.register(
			FindAllUserQuery,
			DI.getInstace().get(FindAllUserQueryHandler)
		);
	},
};
