type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorRGB | CorCMYK;

const pessoaa: Pessoa = {
  idade: 30,
  nome: 'Gabriel',
  salario: 10_000,
};

export function setCorPreferida(pessoaa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoaa, corPreferida: cor };
}

console.log(setCorPreferida(pessoaa, 'Azul'));
