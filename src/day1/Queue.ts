type Node<T> = {
  value: T, next?: Node<T>
}

interface Node2<T> {
  value: T
  next?: Node2<T>
}

class Node3<T> {
  value: T
  next?: Node3<T>
}

export default class Queue<T> {
  public length: number = 0
  head?: Node<T>
  tail?: Node<T>

  enqueue(item: T): void {
    let n = { value: item } as Node<T>
    if (!this.head) {
      this.head = this.tail = n
    } else {
      this.tail!.next = n
      this.tail = n
    }
    this.length++
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    } else if (this.head === this.tail) {
      let value = this.head.value
      this.head = this.tail = undefined
      this.length--
      return value
    } else {
      let value = this.head.value
      this.head = this.head.next
      this.length--
      return value
    }
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
