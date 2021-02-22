import { AggregatteRoot } from "../../../shared/domain/AggregateRoot";

export class User extends AggregatteRoot {
    private name: string;
    private email: string;

    constructor(id: string, email: string, name: string) {
        super(id);
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}
