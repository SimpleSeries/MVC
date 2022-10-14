# SimpleSeries MVC

```bash
npm install @simpleseries/mvc
```

## Example Usage  

Import `SimpleSeries/MVC` and extend the models you'd like to have use it. Create a directory for data files and for your todolist app:

```
mkdir db todolist
```
And add some files:
```
touch tsconfig.json package.json app.ts todolist/list.ts todolist/listitem.ts
```

We have two dependencies, @simpleseries/mvc and @types/node:

```json
// package.json
{
    "dependencies": {
        "@simpleseries/mvc": "latest",
        "@types/node": "latest"
    }
}

```
define a directory for our typscript compiled javascript

```json
// tsconfig.json
{
    "compilerOptions": {
        "outDir": "./javascript"
    }
}

```

```typescript
// todolist/list.ts
import { MVC } from '@simpleseries/mvc';
import { ListItem } from './listitem';

class TodoList extends MVC.Model {
    name: string
    items: Array<ListItem>
    constructor(name) {
        super();
        this.name = name;
        this.items = new Array<ListItem>();       
    }

    addItem(description: string) {
        let listItem = new ListItem(this.id, description)
        this.items.push(listItem);
        listItem.create();
    }

    toString() {
        return `id: ${this.id}, name: ${this.name}`;
    }
}

export { TodoList };

```

```typescript
// todolist/listitem.ts
import { MVC } from '@simpleseries/mvc';

class ListItem extends MVC.Model {
    listId: string;
    description: string;
    done: boolean;
    constructor(listId: string, description: string){
        super();
        this.listId = listId;
        this.description = description;
        this.done = false;
    }

    toString() {
        return `id: ${this.id}, listId: ${this.listId}, description: ${this.description}, done: ${this.done}`
    }
}

export { ListItem }

```

```typescript
// app.js
import { TodoList } from './todolist/list';


let todoList = new TodoList("My List");
todoList.addItem("buy milk");
todoList.addItem("buy cheese");
todoList.addItem("take a shower");
todoList.addItem("brush teeth");

todoList.create();
```

compile and run
```bash
ts
node javascript/app.js
```