export class UnexpectedError extends Error {
  constructor () {
    super('Algo inexperado aconteceu.Tente novamente mais tarde')
    this.name = 'UnexpectedError'
  }
}
