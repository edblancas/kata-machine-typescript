type Node<T> = {
  value: T
  next?: Node<T>
}

export default class Stack<T> {
  public length: number = 0
  private head?: Node<T>

  push(item: T): void {
    let n = { value: item } as Node<T>
    if (!this.head) {
      this.head = n
    } else {
      n.next = this.head
      this.head = n
    }
    this.length++
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined
    }
    let value = this.head.value
    this.head = this.head.next
    this.length--
    return value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
