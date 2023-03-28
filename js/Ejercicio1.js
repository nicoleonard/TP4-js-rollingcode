/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
*/

class Auto{
    #Color;
    #Marca;
    #Modelo;
    #Encendido;

    constructor(color, marca, modelo){
        this.#Color = color;
        this.#Marca = marca;
        this.#Modelo = modelo;
        this.#Encendido= false;
    }

    get getColor(){
        return this.#Color;
    }
    get getMarca(){
        return this.#Marca;
    }
    get getModelo(){
        return this.#Modelo;
    }
    get getEncendido(){
        return this.#Encendido;
    }

    set setColor(color){
        this.#Color = color;
    }
    set setMarca(marca){
        this.#Marca = marca;
    }
    set setModelo(modelo){
        this.#Modelo = modelo;
    }
    set setEncendido(encendido){
        this.#Encendido = encendido;
    }

    Encender() {
        setEncendido(true);
        document.write(`<p>El auto esta encendido</p><br>`);
    }
    Apagar() {
        setEncendido(false);
        document.write(`<p>El auto esta apagado</p><br>`);
    }

}
