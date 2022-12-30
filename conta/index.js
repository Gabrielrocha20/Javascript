function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor){
    if (valor > this.saldo) return 'Saldo insuficiente'
    this.saldo -= valor
    return `R$ ${valor} removido`
}
Conta.prototype.depositar = function (valor){
    this.saldo += parseFloat(valor)
    return `R$ ${valor} depositado`
}
Conta.prototype.verSaldo = function (){
    return `R$ ${this.saldo} saldo atual`
}

const banco = new Conta(2002, 191819, 50.00)
console.log(banco.sacar(10.98))
console.log(banco.depositar(70.00))
console.log(banco.verSaldo())