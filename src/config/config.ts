import * as dotenv from 'dotenv'

// Una clase abstracta no se puede instanciar
export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)
    dotenv.config({
      path: nodeNameEnv,
    })
  }

  public getEnvironment(k: string) {
    return process.env[k] // process.env[PORT]
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k))
  }

  // un getter es una función que si o si tiene que retornar algo
  public get nodeEnv(): string {
    return this.getEnvironment('NODE_ENV')?.trim() || ''
  }

  public createPathEnv(path: string): string {
    const arrEnv: string[] = ['env']

    if (path.length > 0) {
      const stringTowArray = path.split('.') // separa en un nuevo array las palabras que estén con puntos ej prod.release ['prod', 'releas'] si viene una sola palabra no hace nada.
      arrEnv.unshift(...stringTowArray) // inserta el string que viene del path al principio del array ['path', 'env']
    }

    return '.' + arrEnv.join('.') // si recibe un path el string que va a retornar va a ser .path.env el primer punto lo agregamos nosotros y el join agrega el punto en medio de los string del array
  }
}
