class Stack<T> {
    private length: number;
    private __lastIndexAdded: number;
    private __obj: Array<T | null>;
    private __count: number;

    constructor(length:number) {
        this.length = length;
        this.__lastIndexAdded = -1;
        this.__obj = new Array(this.length).fill(null);
        this.__count = 0;
    }
    count():number{
        return this.__count;
    }
    pop(): T | null {
        if (this.__count === 0) {
            console.log('*'.repeat(5), 'stack vacia', '*'.repeat(5));
            return null;
        }

        const item = this.__obj[this.__lastIndexAdded];
        this.__obj[this.__lastIndexAdded] = null;
        this.__lastIndexAdded -= 1;
        this.__count -= 1;

        return item;
    }

    push(value: T): void {
        if (this.__count === this.length) {
            console.log('*'.repeat(5), 'pila stack', '*'.repeat(5));
            return;
        }

        this.__lastIndexAdded += 1;
        this.__obj[this.__lastIndexAdded] = value;
        this.__count += 1;
    }

    *next(): IterableIterator<T | null> {
        for (let i = this.__lastIndexAdded; i >= 0; i -= 1) {
            yield this.__obj[i];
        }
    }

    toString(): string {
        let toReturn = '';

        for (const item of this.next()) {
            toReturn += `--${item}\n`;
        }

        return toReturn;
    }
}

class Coche{
    placas:string
    color:string 
    constructor(placas:string,color:string){
        this.placas = placas;
        this.color = color;
    }

    toString():string{
        return `Carro color ${this.color} con las placas ${this.placas}`
    }
    
    
}

class Estacionamiento extends Stack<Coche>{
    nombreEstablecimiento:string
    capacidadMaxima:number
    constructor(nombre:string,capacidadMaxima:number){
        super(capacidadMaxima);
        this.capacidadMaxima = capacidadMaxima;
        this.nombreEstablecimiento = nombre;
    }
    exists(coche:Coche){
        return this.toString().includes("con las placas "+coche.placas);
    }

    pull(coche: Coche) {
    const cochesSacados = new Stack<Coche>(this.capacidadMaxima);
    let seSacoElCoche = false;

    while (this.count() > 0) {
        const cocheSacado = this.pop();
        if (!cocheSacado) break;

        if (cocheSacado.placas === coche.placas) {
            seSacoElCoche = true;
            break;
        }
        cochesSacados.push(cocheSacado);
    }

    
    for (const cocheRegresado of cochesSacados.next()) {
        if (!cocheRegresado) continue;
        this.push(cocheRegresado);
    }

    return seSacoElCoche;
}
}


const valet = {
    nombre:'julian',
    estacionamiento:new Estacionamiento("El pollo feliz",5),
    meterCoche(coche:Coche){
        if (this.estacionamiento.exists(coche)){
            console.log('[error] El valet no puede meter un coche que ya esta en el estacionamiento eh!!!');
            return;
        }
        this.estacionamiento.push(coche)
    },
    sacarCoche(coche:Coche){
        if (!this.estacionamiento.exists(coche)){
            console.log("El coche no esta en el estacionamiento.")
            return;
        }
        const seSaco = this.estacionamiento.pull(coche);
        console.log(seSaco?"El coche se entrego al cliente":"Se robaron el coche porque no se encontro en el estacionamiento");
    }
}

// --- Prueba de caso de uso: la que venia en el ejemplo en Moodle ---
const coche1 = new Coche('ABC-123', 'blanco');
const coche2 = new Coche('DEF-456', 'amarillo');
const coche3 = new Coche("ush-999",'blanco')
const coche4 = new Coche('GHI-789', 'rojo');
const coche5 = new Coche('JKL-012', 'negro');

valet.meterCoche(coche1);
valet.meterCoche(coche2);
valet.meterCoche(coche3);
valet.meterCoche(coche4);
valet.meterCoche(coche5);

console.log('--- Estacionamiento inicial ---');
console.log(valet.estacionamiento.toString());

console.log('--- El cliente pide su coche rojo ---');
valet.sacarCoche(coche4);

console.log('--- Estacionamiento después de entregar el coche rojo ---');
console.log(valet.estacionamiento.toString());

console.log('--- Se intenta sacar un coche que no está ---');
valet.sacarCoche(new Coche('ZZZ-999', 'verde'));

console.log('--- Estado final del estacionamiento ---');
console.log(valet.estacionamiento.toString());

console.log('--- El cliente pide su coche amarillo ---');
valet.sacarCoche(coche2);
console.log(valet.estacionamiento.toString())


