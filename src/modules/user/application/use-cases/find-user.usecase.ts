import { inject, injectable } from "inversify";
import { IUseCase } from "../../../../shared/application/iUsecase";
import {
    DIUserRepository,
    IUserRepository,
} from "../../domain/user.repository";
import { FindUserQuery } from "../queries/find-user.query";
import { UserResponse } from "../reponses/user.response";

@injectable()
export class FindUserUsecase implements IUseCase {
    constructor(
        @inject(DIUserRepository)
        private readonly userRepository: IUserRepository
    ) {}

    execute(query: FindUserQuery): UserResponse {
        const user = this.userRepository.find(query.id);
        if (!user) throw new Error("User not found");
        return {
            data: user,
        };
    }
}
