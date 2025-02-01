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
      this.length++
      console.log('prepend', this.arr, this.length)
      return
    }

    if (this.length === this.capacity) {
      let newArr = Array(this.capacity * 2).fill(0)
      for (let i = 1; i < this.length + 1; i++) {
        newArr[i] = this.arr[i - 1]
      }
      this.arr = newArr
      this.length++
      this.capacity *= 2
    } else {
      for (let i = this.length; i >= 1; i--) {
        this.arr[i] = this.arr[i - 1]
      }
      this.arr[0] = item
      this.length++
    }

    console.log('prepend', this.arr, this.length)
  }

  insertAt(item: T, idx: number): void {
    if (this.arr.length + 1 > this.capacity) {
      let newArr = Array(this.capacity * 2).fill(0)
      for (let i = 1; i <= this.capacity; i++) {
        newArr[i] = this.arr[i - 1]
      }
      this.arr = newArr
      this.length++
      this.capacity *= 2
    }

    for (let i = idx; i < this.length; i++) {
      this.arr[i + 1] = this.arr[i]
    }
    this.arr[idx] = item
  }

  append(item: T): void {
    if (this.length === this.capacity) {
      let newArr = Array(this.capacity * 2).fill(0)
      for (let i = 0; i < this.length; i++) {
        newArr[i] = this.arr[i]
      }
      this.arr = newArr
    }
    this.arr[this.length] = item
    this.length++
  }

  remove(item: T): T | undefined {
    let i = 0
    while (i < this.length && this.arr[i] != item) {
      i++
    }
    if (i === this.length) return undefined
    this.removeAt(i)
    return item
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined
    }
    return this.arr[idx]
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined
    const ret = this.arr[idx]
    for (let i = idx; this.length > i; i++) {
      this.arr[i] = this.arr[i + 1]
    }
    this.length--
    return ret
  }
}
