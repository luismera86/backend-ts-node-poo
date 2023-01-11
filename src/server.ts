import { UserRouter } from './router'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

class ServerBootstrap {
  public app: express.Application = express()
  private port: number = 8000
  

  constructor() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use('/api', this.routers())
    
    this.listen()
  }

  // Retornamos un array de rutas de express 
  routers(): Array<express.Router> {
    // Ejecutamos cada clase router dentro del array separadas por coma
    return [new UserRouter().router]
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Connected on server in port ${this.port}`)
    })
  }
}

new ServerBootstrap()
