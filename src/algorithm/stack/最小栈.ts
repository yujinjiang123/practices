class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x: number): void {
    this.stack.push(x);
    if (this.minStack.length === 0) {
      this.minStack.push(x);
      return;
    }
    const min = this.getMin();
    if (x < min) {
      this.minStack.push(x);
    } else {
      this.minStack.push(min);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[0];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new MinStack();
stack.push(4);
console.log(stack.getMin());
stack.push(3);
console.log(stack.getMin());
stack.push(6);
console.log(stack.getMin());
stack.push(3);
console.log(stack.getMin());
stack.push(3);
console.log(stack.getMin());
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.getMin());
