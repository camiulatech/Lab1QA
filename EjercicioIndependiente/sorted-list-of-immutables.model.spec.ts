import { SortedListOfImmutables } from './sorted-list-of-immutables.model'; 
import { Food } from './food.model'; 

/*
METODO REMOVE

- Caso Prueba1: Eliminar un elemento existente

Objetivo: Verificar que al tener una lista con elementos se puede eliminar uno existente de manera correcta y la 
lista mantiene el orden
Datos de prueba:
Elementos en la lista:
  new Food("Tacos", 1900, 4500, "taco.png")
  new Food("Helado", 1000, 2500, "helado.png")
  new Food("Chalupas", 2500, 5000, "chalupas.png")
Elemento a eliminar:
  new Food("Tacos", 1900, 4500, "taco.png")
Resultado Esperado: El tamaño de la lista debe de ser 2 ya que inicialmente habian 3 elementos y a eliminar uno deben haber 2

- Caso Prueba2: Eliminar un elemento que no existe

Objetivo: Verificar que al tener una lista con elementos no se puede eliminar uno que no existe y la lista no debe
cambiar
Datos de prueba: 
Elementos en la lista:
  new Food("Sopa", 2500, 5500, "sopa.png")
  new Food("Limonada", 800, 1500,"limonada.png")
  new Food("Sandwich", 2100, 4500,"sandwich.png")
Elemento a eliminar:
  new Food("Churros", 1500, 4000, "churros.png")
Resultado Esperado: El tamaño de la lista debe manetenerse como 3, ya que nada se tuvo que haber eliminado
*/

describe('Eliminar Elementos', () => {
  let sortedList: SortedListOfImmutables;

  beforeEach(() => {
      sortedList = new SortedListOfImmutables();
  });

  it('Deberia eliminar un elemento existente de la lista', () => {
    sortedList.add(new Food("Tacos", 1900, 4500, "taco.png"));
    sortedList.add(new Food("Helado", 1000, 2500, "helado.png"));
    sortedList.add(new Food("Chalupas", 2500, 5000, "chalupas.png"));

    sortedList.remove(new Food("Tacos", 1900, 4500, "taco.png"));

    expect(sortedList.getSize()).toBe(2);
  });

  it('No deberia eliminar un elemento que no existe en la lista', () => {
    sortedList.add(new Food("Sopa", 2500, 5500, "sopa.png"));
    sortedList.add(new Food("Limonada", 800, 1500,"limonada.png"));
    sortedList.add(new Food("Sandwich", 2100, 4500,"sandwich.png"));

    sortedList.remove(new Food("Churros", 1500, 4000, "churros.png"));

    expect(sortedList.getSize()).toBe(3);
  });

});

/*
METODO ADD

- Caso Prueba3: Agregar un elemento a una lista vacía

Objetivo: Verificar que una elemento se pueda agregar correctamente a una lista vacía
Datos de prueba: new Food("Ensalada", 2800, 5200, "ensalada.png");
Resultado Esperado: El elemento en la primera posicion debe ser la Ensalada

- Caso Prueba4: Agregar varios elementos en el orden correcto

Objetivo: Verificar que se agreguen varios elementos se puedan agregar correctamente a una lista en el orden correcto
Datos de prueba: 
new Food("Pasta", 3500, 6500, "pasta.png")
new Food("Burrito", 2700, 5300, "burrito.png")
new Food("Hamburguesa", 3100, 5800, "hamburguesa.png")
Resultado Esperado: Para verificar que se haya agregado en el orden correcto se corrobora que el elemento del medio
sea Hamburguesa
*/

describe('Agregar elementos', () => {
  let sortedList: SortedListOfImmutables;

  beforeEach(() => {
      sortedList = new SortedListOfImmutables();
  });

  it('Deberia de agregar el elemento a una lista vacía', () => {
      const food = new Food("Ensalada", 2800, 5200, "ensalada.png");
      sortedList.add(food);

      expect(sortedList.get(0).getName()).toBe('Ensalada');
  });

  it('Deberia agregar las comidas en el orden correcto', () => {
      sortedList.add(new Food("Pasta", 3500, 6500, "pasta.png"));
      sortedList.add(new Food("Burrito", 2700, 5300,"burrito.png"));
      sortedList.add(new Food("Hamburguesa", 3100, 5800,"hamburguesa.png"));

      expect(sortedList.get(1).getName()).toBe('Hamburguesa');
  });
});
