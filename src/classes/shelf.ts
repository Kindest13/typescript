export default class Shelf<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    // find(title: string) {
    //     return
    // }
    //
    // printTitles() {
    //
    // }
}