type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let value = init;
  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => {
      value = init;
      return value;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
