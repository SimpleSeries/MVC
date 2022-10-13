import { randomUUID } from 'crypto';
import { Writer } from './writer';

namespace MVC {
    export class Model {
        id: string;
        constructor() {
            this.id = randomUUID();
        }

        create() {
            let dbPath = './db/';
            let writer = new Writer(dbPath + `${this.constructor.name.toLowerCase()}.db`);
            writer.append(this.toString());
        }
    }
}

export { MVC }
