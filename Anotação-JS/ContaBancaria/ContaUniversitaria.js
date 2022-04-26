class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero){
        super (agencia, numero)
        this.tipo = 'universitária';
    }
    sacar(valor){
        if (valor > 500){
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;
    }
}