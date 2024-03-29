// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
type NestedInteger = {
  isInteger: () => boolean;

  getInteger: () => number | null;

  setInteger: (value: number) => void;

  add: (elem: NestedInteger) => void;

  getList: () => NestedInteger[];
};

function* generator(list: NestedInteger[]): Generator<number | null> {
  for (const [index, value] of list.entries()) {
    if (value.isInteger()) {
      if (index === list.length - 1) {
        return value.getInteger();
      }
      yield value.getInteger();
    } else {
      yield* generator(value.getList());
    }
  }
}

class NestedIterator {
  iterator?: Generator<number | null>;
  done = false;
  nextValue?: {
    done?: boolean;
    value?: number | null;
  };
  constructor(nestedList: NestedInteger[]) {
    if (nestedList.length) {
      this.iterator = generator(nestedList);
      this.nextValue = this.iterator.next();
    } else {
      this.done = true;
    }
  }

  hasNext(): boolean {
    return !this.nextValue?.done;
  }

  next(): number {
    const value = this.nextValue?.value;
    this.nextValue = this.iterator?.next();
    return value as any;
  }
}
