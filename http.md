## axios 封装

```ts
import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

// 定义一个常见后端请求返回
interface BaseApiResponse<T> {
  status: number
  message: string
  data: T
}
// 拓展 axios 请求配置，加入我们自己的配置
interface RequestOptions {
  // 是否全局展示请求 错误信息
  globalErrorMessage?: boolean
  // 是否展示全部loading
  globalLoading?: boolean
}

// 拓展自定义请求配置
interface ExpandAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
  requestOptions?: RequestOptions
}

// 拓展 axios 请求配置
interface ExpandInternalAxiosRequestConfig<D = any>
  extends InternalAxiosRequestConfig<D> {
  requestOptions?: RequestOptions
}

// 拓展 axios 响应配置
interface ExpandAxiosResponse<T = any, D = any> extends AxiosResponse<T, D> {
  config: ExpandInternalAxiosRequestConfig<D>
}

class Request {
  // axios 实例
  private _instance: AxiosInstance
  // 默认配置
  private _defaultConfig: ExpandAxiosRequestConfig = {
    baseURL: '/api',
    timeout: 20000,
    requestOptions: {
      globalErrorMessage: true,
      globalLoading: true,
    },
  }

  constructor() {
    // 创建axios实例
    this._instance = axios.create(this._defaultConfig)
    this.setupInterceptors()
  }

  // 通用拦截，在初始化时就进行注册和运行，对基础属性进行处理
  private setupInterceptors() {
    // 请求拦截器
    this._instance.interceptors.request.use(
      (c) => {
        const config = c as ExpandInternalAxiosRequestConfig
        // 请求头部处理，如添加 token
        const token = 'token-value'
        if (token) config.headers.Authorization = `Bearer ${token}`

        // config.requestOptions = {}
        // config.headers['x-platform'] = 'web'
        return config
      },
      (err) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err)
      }
    )
    // 响应拦截器
    this._instance.interceptors.response.use(
      (result) => {
        const res = result as ExpandAxiosResponse
        if (!res) return Promise.reject(res)
        return res.data.data
      },
      (err: AxiosError<BaseApiResponse<string>>) => {
        // 错误处理
        const message = err.response?.data.message || 'Response Error'
        // 此处全局报错
        console.error(message)
        return Promise.reject(message)
      }
    )
  }

  // 定义核心请求
  public request(config: ExpandAxiosRequestConfig): Promise<AxiosResponse> {
    return this._instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<BaseApiResponse<T>>> {
    return this._instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.delete(url, config)
  }
}

export default new Request()
```
