import { Collection, Collections} from "./collections"

class Collector {
    name: string;
    collections: Collection[];

    constructor(name: string, collections: Collection[]) {
        this.name = name;
        this.collections = collections;

        this.collections.forEach( (collection) => {
            collection.collectors.push(this);
        });
    }

}

let Collectors: {[name: string]: Collector} = {};

export { Collector, Collectors }