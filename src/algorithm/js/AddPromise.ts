type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
}


