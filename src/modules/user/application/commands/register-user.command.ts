import { ICommand } from "../../../../shared/application/ICommnand";

export class RegisterUserCommand implements ICommand {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string
    ) {}
}
