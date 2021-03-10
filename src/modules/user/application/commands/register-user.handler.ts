import { injectable } from 'inversify';
import { ICommandHandler } from '../../../../shared/cqrs/command.handler';
import { RegisterUserUseCase } from '../use-cases/register-user.usecas';
import { RegisterUserCommand } from './register-user.command';

@injectable()
export class RegisterUserCommandHandler
	implements ICommandHandler<RegisterUserCommand> {
	constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

	async execute(command: RegisterUserCommand) {
		return this.registerUserUseCase.execute(command);
	}
}
