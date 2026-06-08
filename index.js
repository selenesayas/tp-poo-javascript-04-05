// =========================
// NIVEL 1

const auto = {
  marca: "Toyota",
  modelo: "Corolla",

  arrancar() {
    return "El auto arrancó";
  }
};

console.log(auto.marca);
console.log(auto.arrancar());


// =========================
// NIVEL 2

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    return `Hola, soy ${this.nombre}`;
  };
}

const persona1 = new Persona("Juan", 25);
const persona2 = new Persona("Ana", 30);

console.log(persona1.saludar());
console.log(persona2.saludar());


// =========================
// NIVEL 3

Persona.prototype.caminar = function () {
  return "Estoy caminando";
};

console.log(persona1.caminar());
console.log(persona2.caminar());


// =========================
// NIVEL 4

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return "Hace un sonido";
  }
}

class Perro extends Animal {
  hacerSonido() {
    return "Guau";
  }
}

const perro = new Perro("Firulais");

console.log(perro.nombre);
console.log(perro.hacerSonido());


// =========================
// NIVEL 5

class CuentaBancaria {
  constructor(saldo) {
    this.saldo = saldo;
  }

  depositar(monto) {
    this.saldo += monto;
  }

  retirar(monto) {
    if (monto <= this.saldo) {
      this.saldo -= monto;
    } else {
      console.log("Fondos insuficientes");
    }
  }

  verSaldo() {
    return `Saldo actual: $${this.saldo}`;
  }
}

const cuenta = new CuentaBancaria(1000);

cuenta.depositar(500);
cuenta.retirar(200);

console.log(cuenta.verSaldo());