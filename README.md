# Trabajo Práctico - POO en JavaScript 04/05

## ¿Qué es un objeto en JavaScript?

Un objeto es una estructura que almacena propiedades y métodos.

## ¿Qué diferencia hay entre clase y objeto?

Una clase es una plantilla para crear objetos.
Un objeto es una instancia creada a partir de una clase.

## ¿Qué es un prototipo?

Es un objeto del cual otros objetos pueden heredar propiedades y métodos.

## ¿Qué hace la palabra new?

Crea una nueva instancia de un objeto, asigna el valor de this y conecta el prototipo.

## ¿Por qué JavaScript no es realmente orientado a clases?

Porque internamente utiliza prototipos para la herencia.

## ¿Qué diferencia hay entre un método dentro del constructor y uno en prototype?

Dentro del constructor se crea una copia por cada objeto.
En prototype se comparte un único método entre todas las instancias.

## ¿Qué hace extends?

Permite que una clase herede de otra.

## ¿Para qué sirve super()?

Llama al constructor de la clase padre.

## ¿Qué es la prototype chain?

Es la cadena de prototipos que JavaScript recorre para buscar propiedades o métodos.

## ¿Cuándo conviene usar POO y cuándo no?

Conviene cuando se trabaja con entidades que tienen datos y comportamientos relacionados.
No siempre es necesaria para programas pequeños.

## ¿Qué ventaja tiene sobre código normal?

Permite organizar mejor el código y reutilizar lógica.

## ¿Qué problema resuelve la herencia?

Evita duplicar código permitiendo reutilizar funcionalidades comunes.