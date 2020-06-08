import { HttpPostCLient, HttpPostParams } from "../protocols/http/http-post-client"

export class HttpPostClientSpy implements HttpPostCLient {
  url?: string
  body?: object
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
