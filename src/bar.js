import { Foo } from "./foo";

export class Bar {
    constructor() {
        this.foo = new Foo('bar');
    }
}
