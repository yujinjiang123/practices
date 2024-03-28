type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  map: Map<string, Set<Callback>> = new Map();
  subscribe(eventName: string, callback: Callback): Subscription {
    const callbackSet = this.map.get(eventName) ?? new Set<Callback>();
    callbackSet.add(callback);
    this.map.set(eventName, callbackSet);
    return {
      unsubscribe: () => {
        this.map.get(eventName)?.delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const callbackSet = this.map.get(eventName);
    const res: any[] = [];
    if (callbackSet) {
      for (const cb of callbackSet.values()) {
        res.push(cb(...args));
      }
    }
    return res;
  }
}

const emitter = new EventEmitter();
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []
