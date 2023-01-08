/* eslint-disable */
let nome: string = 'nome';
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n

let arraydeNumeros: Array<number> = [1, 2]
let arraydeNumeros2: number[] = [1, 2]

let arraydestring: Array<string> = ['1', '2']
let arraydestring2: string[] = ['1', '2']


let pessoa: {nome:string, idade:number, adulto?:boolean} = {
  idade: 15,
  nome: 'gabriel',
  adulto:true
}

function soma(x:number, y:number): number {
  return x + y
}


const soma2: (x:number, y:number) => number = (x, y) => x + y
