import { Restaurant } from './restaurante.model';
import { Food } from './food.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model'; 

/*
METODO addShipmentToInventory

- Caso Prueba5: Agregar un elemento a una lista vacía

Objetivo: Verificar si el restaurente puede aceptar o rechazar un pedido dependiendo del cash disponible
Datos de prueba: 
  1. Efectivo: 100000
     CostoEnvio: 80000
     ResultadoEsperado: true
  2. Efectivo: 100000
     CostoEnvio: 100000
     ResultadoEsperado: true
  3. Efectivo: 100000
     CostoEnvio: 200000
     ResultadoEsperado: false
Resultado Esperado: El tenvio debe ser aceptado o rechazado y que coinicida con el dato establecido en el 
caso de prueba
*/

describe('Restaurant Parametrized Tests', () => {
  let restaurant: Restaurant;

  beforeEach(() => {
    restaurant = new Restaurant("Parametrized Restaurant", 100000); 
  });

  const casosPrueba = [
    { 
      descripcion: 'Se deberia enviar ya que hay suficiente dinero', 
      efectivo: 100000, 
      costoEnvio: 80000, 
      resultadoEsperado: true, 
    },
    { 
      descripcion: 'Se deberia enviar ya que es exacamente lo que se necesita', 
      efectivo: 100000, 
      costoEnvio: 100000, 
      resultadoEsperado: true, 
    },
    { 
      descripcion: 'No se deberia enviar ya que no hay suficiente dinero', 
      efectivo: 100000, 
      costoEnvio: 200000, 
      resultadoEsperado: false, 
    }
  ];

  casosPrueba.forEach(({ descripcion, efectivo, costoEnvio, resultadoEsperado }) => {
    it(descripcion, () => {
      restaurant = new Restaurant("Restaurante", efectivo);

      const envio = new SortedListOfImmutables();
      envio.add(new Food("Limonada", costoEnvio, costoEnvio * 2, "limonada.png")); 

      const resultado = restaurant.addShipmentToInventory(envio);
      expect(resultado).toBe(resultadoEsperado);
    });
  });
  
});

