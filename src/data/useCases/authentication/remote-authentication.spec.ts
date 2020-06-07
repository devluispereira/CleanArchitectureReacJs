
import { RometeAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";

describe("RometeAuthentication", () => {
  test("Should call HttpPostCLient with corret Url", async () => {
    const httpPostCLientSpy = new HttpPostClientSpy();
    const url = "any_url";
    const sut = new RometeAuthentication(url, httpPostCLientSpy);
    await sut.auth();
    expect(httpPostCLientSpy.url).toBe(url);
  });
});
