type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string | symbol]: JSONValue };

declare global {
  interface Function {
    callPolyfill(
      context: Record<string | symbol, JSONValue>,
      ...args: JSONValue[]
    ): JSONValue;
  }
}

Function.prototype.callPolyfill = function (context, ...args): JSONValue {
  const symbol = Symbol("fn");
  context[symbol] = this as any;
  const result = (context[symbol] as any)(...args) as JSONValue;
  delete context[symbol];
  return result;
};
