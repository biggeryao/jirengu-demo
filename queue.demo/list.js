const createList = (value) => {
    return {
        data: value,
        next: null
    }
}
const appendList = (list, value) => {
    const node = {
        date: value,
        next: null
    }
    list.next = node;
    return node
}
const list = createList(10)
console.log(list);
const node = appendList(list, 20)
console.log(node);
