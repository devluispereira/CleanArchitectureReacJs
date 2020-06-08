
import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";

type SutTypes = {
  sut: RemoteAuthentication
  httpPostCLientSpy: HttpPostClientSpy
}
const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostCLientSpy = new HttpPostClientSpy();

  const sut = new RemoteAuthentication(url, httpPostCLientSpy);
  return {
    sut, httpPostCLientSpy
  }
}
describe("RometeAuthentication", () => {
  test("Should call HttpPostCLient with corret Url", async () => {
    const url = 'other_url'
    const { sut, httpPostCLientSpy } = makeSut(url)
    await sut.auth();
    expect(httpPostCLientSpy.url).toBe(url);
  });
});
