import { Router } from 'express'

export class BaseRouter<T> {
  public router: Router
  public controller: T
  // public middleware: U

  constructor(TController: { new (): T }) {
    this.router = Router()
    this.controller = new TController() // Cuando lo ejecutamos en el super instanciamos automáticamente una nueva clase controller que le mandamos
    this.routes() // Esta función va a ejecutar automáticamente todas las rutas que se manden por las clases hijas 
  }

  routes() {
    
  }
}
