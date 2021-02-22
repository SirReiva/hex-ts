import { injectable } from "inversify";
import { User } from "../../domain/user";
import { IUserRepository } from "../../domain/user.repository";

@injectable()
export class InMemoryUserRepository implements IUserRepository {
    private list: User[] = [];

    find(id: string) {
        return this.list.find((u) => u.getID() === id);
    }

    create(user: User) {
        this.list.push(user);
    }

    findAll() {
        return this.list;
    }
}
