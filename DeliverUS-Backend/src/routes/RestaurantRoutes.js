import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  // No podemos asignar un verbo http para dos funciones de controladores
  // FR2: leer restaurante para owner, el propietario de un restaurante solo podrá leer su restaurante y en un futuro añadiremos una ruta y un controlador para ello
  app.route('/restaurants') // path
    .get( // lista de restaurantes que ve el cliente
      RestaurantController.index)
    .post(RestaurantController.create)

  app.route('/restaurants/:restaurantId')
    .get(RestaurantController.show)
    .put(RestaurantController.update)
    .delete(RestaurantController.destroy)
}

export default loadFileRoutes
