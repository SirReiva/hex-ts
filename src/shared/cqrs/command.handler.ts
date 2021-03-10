import { ICommand } from './commad.interface';

export interface ICommandHandler<T extends ICommand> {
	execute(command: T): Promise<any>;
}
