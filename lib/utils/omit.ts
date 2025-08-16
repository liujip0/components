export function omit<T extends object, K extends keyof T>(
  obj: T,
  keysToOmit: K[]
) {
  const newObj = {} as Partial<T>;
  for (const key in obj) {
    if (!keysToOmit.includes(key as unknown as K)) {
      newObj[key] = obj[key];
    }
  }
  return newObj as Omit<T, K>;
}

const result = omit({ a: 1, b: 2, c: 3 }, ["b", "c"]);
console.log(result); // { a: 1 }
