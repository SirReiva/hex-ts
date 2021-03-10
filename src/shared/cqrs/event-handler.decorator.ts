import { injectable } from 'inversify';
import { IEvent } from './event.interface';

export const EventHandler = (c: IEvent) => (ctor: any) => {
	return injectable()(ctor);
};
