export default class ArrayList<T> {
  public length: number = 0
  private capacity: number;
  private arr: T[];

  constructor(capacity: number) {
    this.capacity = capacity
    this.arr = Array(capacity).fill(0)
  }

  prepend(item: T): void {
    if (this.length === 0) {
      this.arr[0] = item
      return
    }

    if (this.length + 1 > this.capacity) {
      let newArr = Array(this.capacity * 2).fill(0)
      for (let i = 1; i <= this.capacity; i++) {
        newArr[i] = this.arr[i - 1]
      }
      this.arr = newArr
      this.length = this.capacity + 1
      this.capacity *= 2
    } else {
      let tmp = this.arr[0]
      let tmp2
      for (let i = 0; i <= this.length; i++) {
        tmp = this.arr[i]
        tmp2 = this.arr[i + 1]
        this.arr[i + 1] = tmp
        tmp = tmp2
      }
      this.arr[0] = item
    }
  }

  insertAt(item: T, idx: number): void {

  }

  append(item: T): void {
    if (this.length === this.capacity) {
    }
    this.arr[this.length] = item
  }

  remove(item: T): T | undefined {
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined
    return this.arr[idx]
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined
    this.length--
    return this.arr[this.length + 1]
  }
}
