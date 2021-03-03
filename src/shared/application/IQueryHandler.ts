import { Instanciable } from '../utils/intanciable.interface';
import { ICommand } from './ICommnand';
import { IQuery } from './IQuery';

export interface IQueryHander<T extends Instanciable<IQuery>> {
	execute(command: T): void | Promise<void>;
}
