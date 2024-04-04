type F = (...args: any[]) => void;

function debounce(fn: F, t: number): F {
  let id: any = null;
  return function (...args) {
    if (id) {
      clearTimeout(id);
      id = setTimeout(() => {
        fn(...args);
      }, t);
      return;
    }
    id = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
