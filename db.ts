import { readFileSync, writeFileSync, appendFileSync } from 'fs';

class DB {
    dbPath = './db/';
    lineBreak = '\n';
    filepath: string;
    constructor(filepath: string) {
        this.filepath = this.dbPath + filepath + '.db';
    }

    read() {
        return readFileSync(this.filepath, 'utf-8').split('\n');
        
    }

    write(content: string) {
        writeFileSync(this.filepath, content + this.lineBreak);
    }

    append(content: string) {
        appendFileSync(this.filepath, content + this.lineBreak);
    }
}

export { DB };
