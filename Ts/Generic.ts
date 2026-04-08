function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1,2,3]));
console.log(getFirstElement<string>(["a","b","c"]));