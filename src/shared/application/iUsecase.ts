import { IResponse } from './IResponse';

export interface IUseCase {
	execute(
		...input: any[]
	): IResponse | Promise<IResponse> | void | Promise<void>;
}
