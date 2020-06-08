export type HttpPostParams={
  url: string
}
export interface HttpPostCLient {
  post(params: HttpPostParams): Promise<void>

}
