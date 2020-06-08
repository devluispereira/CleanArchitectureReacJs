
import { HttpPostCLient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-reponse'

export class HttpPostClientSpy<T, R> implements HttpPostCLient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
