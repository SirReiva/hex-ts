export abstract class AggregatteRoot {
    private id: string;
    constructor(id: string) {
        this.id = id;
    }

    getID() {
        return this.id;
    }
}
