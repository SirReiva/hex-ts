import { ICommand } from '../../../../shared/cqrs/commad.interface';

export class RegisterUserCommand implements ICommand {
	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly email: string
	) {}
}
