import { HttpPostCLient } from "../../protocols/http/http-post-client";
import { RometeAuthentication } from "./remote-authentication";

describe("RometeAuthentication", () => {
  test("Should call HttpPostCLient with corret Url", async () => {
    class HttpPostClientSpy implements HttpPostCLient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const httpPostCLientSpy = new HttpPostClientSpy();
    const url = "any_url";
    const sut = new RometeAuthentication(url, httpPostCLientSpy);
    await sut.auth();
    expect(httpPostCLientSpy.url).toBe(url);
  });
});
