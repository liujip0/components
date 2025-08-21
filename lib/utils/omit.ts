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
