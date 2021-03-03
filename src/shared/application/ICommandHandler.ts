import { Instanciable } from '../utils/intanciable.interface';
import { ICommand } from './ICommnand';

export interface ICommandHander<T extends Instanciable<ICommand>> {
	execute(command: T): void | Promise<void>;
}
