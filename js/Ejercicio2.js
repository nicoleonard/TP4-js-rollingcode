/* 2- Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */


class Cuenta{
    #titular;
    #saldo;

    constructor(titular){
        this.#titular = titular;
        this.#saldo=0;
    }
    get getTitular(){
        return this.#titular;
    }
    get getSaldo(){
        return this.#saldo;
    }

    set setTitular(titular){
        this.#titular = titular;
    }
    set setSaldo(saldo){
        this.#saldo = saldo;
    }

    ingresar(dinero){
        let saldo = this.getSaldo();
        saldo = saldo+dinero;
        this.setSaldo(saldo)
    }

    extraer(dinero){
        let saldo = this.getSaldo();
        saldo = saldo-dinero;
        this.setSaldo(saldo);
    }
    informar(){
        document.write(`<p>Titular: ${this.getTitular}</p><br><p>Saldo: ${this.getSaldo}</p>`)
    }
}

let cuenta1= new Cuenta("nico");
cuenta1.informar;
cuenta1.ingresar(100);
cuenta1.extraer(50);
cuenta1.informar;