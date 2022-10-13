import { readFileSync } from 'fs';

class Reader {
    filepath: string;
    constructor(filepath: string) {
        this.filepath = filepath;
    }

    read() {
        return readFileSync(this.filepath, 'utf-8');
    }
}

export { Reader };
