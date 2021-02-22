import { IQuery } from "../../../../shared/application/IQuery";

export class FindUserQuery implements IQuery {
    constructor(public readonly id: string) {}
}
