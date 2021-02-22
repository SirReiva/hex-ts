import { User } from "./user";

export interface IUserRepository {
    find(id: string): User | undefined;
    findAll(): User[];
    create(user: User): void;
}

export const DIUserRepository = Symbol("UserRepository");
