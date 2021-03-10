import { injectable } from 'inversify';
import { Instanciable } from '../utils/intanciable.interface';
import { ICommand } from './commad.interface';
import { ICommandHandler } from './command.handler';

@injectable()
export class CommandBus<CommandBase extends ICommand = ICommand> {
	private commandMap: Map<string, ICommandHandler<CommandBase>> = new Map();

	async execute<S extends CommandBase>(command: S): Promise<void> {
		const instance = this.commandMap.get(command.constructor.name);
		if (!instance) throw new Error('Not handler match');

		await instance.execute(command);
	}

	register(
		command: Instanciable<CommandBase>,
		handler: ICommandHandler<CommandBase>
	) {
		this.commandMap.set(command.name, handler);
	}
}
