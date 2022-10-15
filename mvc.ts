import { randomUUID } from 'crypto';
import { DB } from './db';

namespace MVC {
    export class Model {
        id: string;
        dbName: string;
        constructor() {
            this.id = randomUUID();
            this.dbName = this.constructor.name.toLowerCase();
        }

        getInfo() {
            let info = `ClassName: ${this.constructor.name}, propNames: ${Object.getOwnPropertyNames(this)}`
            return info;
        }

        all() {
            let db = new DB(this.dbName);
            return db.read();
        }

        create() {
            let db = new DB(this.dbName);
            db.append(this.toJSON());
        }

        // TODO decide whether to use JSON or a different way of storing.
        // should this decision happen in the model or at the db level?
        // 
        // How are we going to initialize objects using it?
        toJSON() {
            let json = JSON.stringify(this);
            return json;
        }     
    }
}

export { MVC }
