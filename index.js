class Stack {
    
}

class Queue {
    #list

    constructor(list) {
        this.#list = list || [];
    }
    enqueue(item) { 
        this.#list.push(item);
    }

    dequeue() {
        return this.#list.splice(0, 1);
    }

    get count() {
        return this.list.length;
    }
    get next() {
        return this.#list[0];
    }
}
const Queue = new Numbers();


module.exports = { Stack, Queue };
