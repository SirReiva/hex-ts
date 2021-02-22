import { inject, injectable } from "inversify";
import { IUseCase } from "../../../../shared/application/iUsecase";
import { User } from "../../domain/user";
import {
    DIUserRepository,
    IUserRepository,
} from "../../domain/user.repository";
import { RegisterUserCommand } from "../commands/register-user.command";

@injectable()
export class RegisterUserUseCase implements IUseCase {
    constructor(
        @inject(DIUserRepository)
        private readonly userRepository: IUserRepository
    ) {}

    execute(command: RegisterUserCommand) {
        const { id, name, email } = command;
        const user = new User(id, email, name);
        this.userRepository.create(user);
    }
}
