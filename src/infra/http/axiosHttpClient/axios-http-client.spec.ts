import { AxiosHttpClient } from "./axios-http-client";

import axios from "axios";

import { mockAxios } from '../../test/index'
import { mockPostRequest } from "@/data/test/index";

jest.mock("axios");

type SytTypes={
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SytTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios
  }
};

describe("AxiosHttpClient", () => {
  test("should call axios witch corret Body", async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("should return the corret statusCode and Body", () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    const httpResponse = sut.post(request);
    expect(httpResponse).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
