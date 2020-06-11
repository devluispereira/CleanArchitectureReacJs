import { AxiosHttpClient } from "./axios-http-client";

import axios from "axios";
import faker from "faker";
import { HttpPostParams } from "@/data/protocols/http";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mokedAxiosResponse = {
  data: faker.random.objectElement(),
  status: faker.random.number()
};
mockedAxios.post.mockResolvedValue(mokedAxiosResponse);

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: faker.random.objectElement
  };
};
describe("AxiosHttpClient", () => {
  test("should call axios witch corret Body", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("should return the corret statusCode and Body", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    const httpResponse = await sut.post(request);
    expect(httpResponse).toEqual({
      statusCode: mokedAxiosResponse.status,
      body: mokedAxiosResponse.data
    });
  });
});
