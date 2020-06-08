import { HttpPostCLient, HttpPostParams } from "../protocols/http/http-post-client"

export class HttpPostClientSpy implements HttpPostCLient {
  url?: string
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}
