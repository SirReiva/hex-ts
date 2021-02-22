import { inject, injectable } from "inversify";
import { IUseCase } from "../../../../shared/application/iUsecase";
import {
    DIUserRepository,
    IUserRepository,
} from "../../domain/user.repository";
import { FindAllUserQuery } from "../queries/findAll-user.query";
import { UserListResponse } from "../reponses/user-list.response";

@injectable()
export class FindAllUserUsecase implements IUseCase {
    constructor(
        @inject(DIUserRepository)
        private readonly userRepository: IUserRepository
    ) {}

    execute(_query: FindAllUserQuery): UserListResponse {
        const users = this.userRepository.findAll();
        return {
            data: users,
        };
    }
}
