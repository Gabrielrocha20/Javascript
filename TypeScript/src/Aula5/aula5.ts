// Array<T> - Tt[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function ConcatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const concatenacao = ConcatenaString('a', 'b', 'c');
const result = multiplicaArgs(1, 2, 3);
console.log(result, concatenacao);
