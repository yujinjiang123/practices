interface Function {
  myCall: (o: any, ...args: any[]) => any;
  myApply: (o: any, args: any[]) => any;
}

Function.prototype.myCall = function (o, ...args) {
  const symbol = Symbol("call");
  o[symbol] = this;
  const result = o[symbol](...args);
  delete o[symbol];
  return result;
};

Function.prototype.myApply = function (o, args) {
  const symbol = Symbol("call");
  o[symbol] = this;
  const result = o[symbol](...args);
  delete o[symbol];
  return result;
};

const fn = function (a: number, b: number) {
  //@ts-ignore
  console.log(this.name, a, b);
};

fn.myCall({ name: "yu" }, 2, 3);
fn.myApply({ name: "yu" }, [2, 3]);
