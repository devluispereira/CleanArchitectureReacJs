import { HttpPostCLient } from '../../protocols/http/http-post-client'

export class RometeAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostCLiente: HttpPostCLient
  ) {}

  async auth (): Promise<void> {
    await this.httpPostCLiente.post(this.url)
  }
}
