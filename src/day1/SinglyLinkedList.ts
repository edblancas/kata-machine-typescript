type Node<T> = {
  value: T
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
  length: number = 0
  head?: Node<T>
  tail?: Node<T>

  prepend(item: T): void {
    let n: Node<T> = { value: item }
    if (!this.head) {
      this.head = this.tail = n
    } else {
      n.next = this.head
      this.head = n
    }
    this.length++
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx >= this.length) throw Error("index out of bounds")

    if (idx === 0) {
      this.prepend(item)
    } else {
      let n = { value: item } as Node<T>
      let curr = this.head
      let prev
      for (let i = 0; i < idx; i++) {
        prev = curr
        curr = curr!.next
      }
      prev!.next = n
      n.next = curr
    }

    this.length++
  }

  append(item: T): void {
    let n = { value: item }
    if (!this.head) {
      this.head = this.tail = n
    } else {
      this.tail!.next = n
      this.tail = n
    }
    this.length++
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined
    }

    let curr: Node<T> | undefined = this.head
    let prev
    while (curr && curr.value !== item) {
      prev = curr
      curr = curr.next
    }

    if (!curr) return undefined
    if (!prev) {
      this.head = this.head.next
    } else {
      prev!.next = curr!.next
    }

    this.length--
    if (this.length === 0) this.head = this.tail = undefined

    return curr.value
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) throw Error('idx unbound')

    if (!this.head) {
      return undefined
    }

    let curr: Node<T> | undefined = this.head
    for (let i = 0; i < idx; i++) {
      curr = curr!.next
    }

    return curr!.value
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) throw Error('idx unbound')

    if (!this.head) {
      return undefined
    }

    let prev
    let curr: Node<T> | undefined = this.head
    for (let i = 0; i < idx; i++) {
      prev = curr
      curr = curr!.next
    }

    if (idx === 0) {
      this.head = this.head.next
    } else {
      prev!.next = curr!.next
    }

    this.length--
    if (this.length === 0) {
      this.tail = this.head = undefined
    }

    return curr!.value
  }
}
