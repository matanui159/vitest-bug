export class Foo {
    get nameLength() {
        return this.name.length;
    }

    constructor(name) {
        this.name = name;
    }
}
