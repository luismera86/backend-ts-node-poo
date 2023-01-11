import { BaseRouter } from './router'
import { UserController } from '../controllers'

export class UserRouter extends BaseRouter<UserController> {
  // El UserController lo mandamos como el genérico que se encuentra en BaseRouter para ejecutar la clase

  constructor() {
    super(UserController) // pasamos el controller para ejecutar en el constructor de BaseRouter
  }

  routes(): void {
    // está función viene de la clase padre BaseRouter que se está ejecutando en la clase padre
    this.router.get('/user', (req, res) => {
      this.controller.getUser(req, res)
    })
  }
}
