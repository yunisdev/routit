import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { RoutitServer } from './RoutitServer'

export class RestRoute<
  ObjectType = any,
  PostRequestType = ObjectType,
  PostResponseType = ObjectType,
  PutRequestType = ObjectType,
  PutResponseType = ObjectType,
  PatchRequestType = ObjectType,
  PatchResponseType = ObjectType,
  DeleteResponseType = undefined | null | '' | {}
> {
  routeName: string
  server: RoutitServer

  constructor(server: RoutitServer, routeName: string) {
    this.routeName = routeName
    this.server = server
  }

  private _getUrl(id: number | string | undefined = undefined): string {
    return `${this.server.serverRoot}/${this.routeName}${
      id === undefined ? '' : `/${id.toString()}`
    }`
  }

  // Methods
  async getAll<ResponseType = AxiosResponse<ObjectType[]>>(
    config?: AxiosRequestConfig
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.get(this._getUrl(), config)
    return response
  }

  async getOne<ResponseType = AxiosResponse<ObjectType>>(
    id: number | string,
    config?: AxiosRequestConfig
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.get(this._getUrl(id), config)
    return response
  }

  async post<
    RequestType = PostRequestType,
    ResponseType = AxiosResponse<PostResponseType>
  >(data: RequestType, config?: AxiosRequestConfig): Promise<ResponseType> {
    var response: ResponseType = await axios.post(this._getUrl(), data, config)
    return response
  }

  async put<
    RequestType = PutRequestType,
    ResponseType = AxiosResponse<PutResponseType>
  >(
    id: number | string,
    data: RequestType,
    config?: AxiosRequestConfig
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.put(this._getUrl(id), data, config)
    return response
  }

  async patch<
    RequestType = PatchRequestType,
    ResponseType = AxiosResponse<PatchResponseType>
  >(
    id: number | string,
    data: RequestType,
    config?: AxiosRequestConfig
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.put(this._getUrl(id), data, config)
    return response
  }

  async delete<ResponseType = AxiosResponse<DeleteResponseType>>(
    id: number | string,
    config?: AxiosRequestConfig
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.delete(this._getUrl(id), config)
    return response
  }
}
