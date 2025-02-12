class GenericStorage<T> {
  private array: T[] = [];
  public add(item: T): void {
    this.array.push(item);
  }
  public remove(item: T): void {
    this.array = this.array.filter((elem) => elem !== item);
  }
  public getAll(): T[] {
    return [...this.array];
  }
}

const storage = new GenericStorage<number>();
storage.add(10);
storage.add(20);
storage.add(30);
console.log(storage.getAll());
storage.remove(20);
console.log(storage.getAll());

// Output:
// [ 10, 20, 30 ]
// [ 10, 30 ]
