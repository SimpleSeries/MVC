import { writeFileSync, appendFileSync } from 'fs';

// Writer takes a filepath of type string as a 
// constructor argument
//
// its method write takes a string argument and
// writes it to the file located at the filepath
class Writer {
    filepath: string;
    constructor(filepath: string, ) {
        this.filepath = filepath;
    }

    write(content: string) {
        writeFileSync(this.filepath, content + '\n');
    }

    append(content: string) {
        appendFileSync(this.filepath, content + '\n');
    }
}

export { Writer };
