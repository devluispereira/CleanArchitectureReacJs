import { HttpPostParams, HttpResponse, HttpPostCLient } from "@/data/protocols/http";
import axios from "axios";

export class AxiosHttpClient implements HttpPostCLient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const htttpResponse = await axios.post(params.url, params.body);
    return {
      statusCode: htttpResponse.status,
      body: htttpResponse.data
    }
  }
}
