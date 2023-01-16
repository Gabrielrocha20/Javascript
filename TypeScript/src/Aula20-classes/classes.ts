export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Netflix', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Gabriel', 'Rocha');
const colaborador2 = new Colaborador('Milena', 'Rocha');
const colaborador3 = new Colaborador('Maria', 'Rocha');

empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);

console.log(empresa);
empresa.mostrarColaboradores();
