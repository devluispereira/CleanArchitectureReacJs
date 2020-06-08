import { HttpPostCLient } from "../../protocols/http/http-post-client";
import { AuthenticationPrams } from "../../../domain/useCases/authentication";

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostCLiente: HttpPostCLient
  ) {}

  async auth (params: AuthenticationPrams): Promise<void> {
    await this.httpPostCLiente.post({ url: this.url, body: params });
  }
}
