import { ContainerModule, interfaces } from 'inversify';
import { FindUserUsecase } from './application/use-cases/find-user.usecase';
import { FindAllUserUsecase } from './application/use-cases/findAll-user.usecase';
import { RegisterUserUseCase } from './application/use-cases/register-user.usecas';
import { DIUserRepository } from './domain/user.repository';
import { InMemoryUserRepository } from './infrastructure/db/inmemory-user.repository';

export const UserModule = new ContainerModule(
	(
		bind: interfaces.Bind,
		unbind: interfaces.Unbind,
		isBound: interfaces.IsBound,
		rebind: interfaces.Rebind
	) => {
		bind(DIUserRepository).to(InMemoryUserRepository).inSingletonScope();
		bind(FindAllUserUsecase).toSelf();
		bind(FindUserUsecase).toSelf();
		bind(RegisterUserUseCase).toSelf();
	}
);
