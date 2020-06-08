import { HttpPostCLient, HttpStatusCode } from "../../protocols/http";
import { AuthenticationPrams, Authentication } from "../../../domain/useCases/authentication";
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors";
import { AccountModel } from "@/domain/models/acocount-model";

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostCLiente: HttpPostCLient<AuthenticationPrams, AccountModel>
  ) {}

  async auth (params: AuthenticationPrams): Promise<AccountModel> {
    const httpResponse = await this.httpPostCLiente.post({ url: this.url, body: params });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:return httpResponse.body
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
