// https://leetcode.cn/problems/cache-with-time-limit/
type Data<T> = {
  value: T;
  startTime: number;
  duration: number;
};
class TimeLimitedCache<K, V> {
  map: Map<K, Data<V>> = new Map();
  constructor() {}

  set(key: K, value: V, duration: number): boolean {
    const v = this.map.get(key);
    const now = new Date().valueOf();
    const data: Data<V> = {
      value,
      startTime: now,
      duration,
    };
    this.map.set(key, data);
    return !!(v && now - v.startTime < duration);
  }

  get(key: K): V | -1 {
    const v = this.map.get(key);
    if (v) {
      const now = new Date().valueOf();
      if (now - v.startTime > v.duration) {
        return -1;
      }
      return v.value;
    }
    return -1;
  }

  count(): number {
    const now = new Date().valueOf();
    return [...this.map.values()].filter(
      ({ startTime, duration }) => now - startTime < duration,
    ).length;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
