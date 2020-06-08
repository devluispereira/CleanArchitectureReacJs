export type HttpPostParams={
  url: string
  body?: object
}
export interface HttpPostCLient {
  post(params: HttpPostParams): Promise<void>

}
