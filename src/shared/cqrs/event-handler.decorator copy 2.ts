import { injectable } from 'inversify';
import { ICommand } from './commad.interface';
import { IQuery } from './query.interface';

export const EventHandler = (c: ICommand | IQuery) => (ctor: any) => {
	return injectable()(ctor);
};
