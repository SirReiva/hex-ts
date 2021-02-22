import { ICommand } from "./ICommnand";
import { IQuery } from "./IQuery";
import { IResponse } from "./IResponse";

export interface IUseCase {
    execute(
        input: IQuery | ICommand
    ): IResponse | Promise<IResponse> | void | Promise<void>;
}
