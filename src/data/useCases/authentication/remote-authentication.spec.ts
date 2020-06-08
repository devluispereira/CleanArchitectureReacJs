
import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";
import faker from 'faker'
import { mockAuthentication } from "@/domain/test/mock-authentication";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { HttpStatusCode } from "@/data/protocols/http/http-reponse";

type SutTypes = {
  sut: RemoteAuthentication
  httpPostCLientSpy: HttpPostClientSpy
}
const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostCLientSpy = new HttpPostClientSpy();

  const sut = new RemoteAuthentication(url, httpPostCLientSpy);
  return {
    sut, httpPostCLientSpy
  }
}
describe("RometeAuthentication", () => {
  test("Should call HttpPostCLient with corret Url", async () => {
    const url = faker.internet.url()
    const { sut, httpPostCLientSpy } = makeSut(url)
    await sut.auth(mockAuthentication());
    expect(httpPostCLientSpy.url).toBe(url);
  });

  test("Should call HttpPostCLient with corret Body", async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    const authenticationPrams = mockAuthentication()
    await sut.auth(authenticationPrams);
    expect(httpPostCLientSpy.body).toEqual(authenticationPrams);
  });

  test("Should throw InvalidCredentialsError if HttpPostCliente return 401", async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.unathorized
    }
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  });
});
