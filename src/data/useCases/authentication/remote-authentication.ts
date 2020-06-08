import { HttpPostCLient } from "../../protocols/http/http-post-client";
import { AuthenticationPrams } from "../../../domain/useCases/authentication";
import { HttpStatusCode } from "@/data/protocols/http/http-reponse";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error ";

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostCLiente: HttpPostCLient
  ) {}

  async auth (params: AuthenticationPrams): Promise<void> {
    const httpResponse = await this.httpPostCLiente.post({ url: this.url, body: params });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:break
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
