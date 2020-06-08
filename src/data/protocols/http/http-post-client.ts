import { HttpResponse } from "./http-reponse";

export type HttpPostParams<T>={
  url: string
  body?: T
}

export interface HttpPostCLient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>

}
