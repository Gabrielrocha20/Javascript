type MapStringsCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);
