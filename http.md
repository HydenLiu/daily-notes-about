  ## axios 封装
  ``` ts
  import axios, { AxiosRequestConfig, AxiosResponce } from 'axios'
  const defaultConfig: AxiosRequestConfig = {
    baseURL: '',
    timeout: 2000,
  }

  class Http {
    constructor() {
      this.requestInterceptor()
      this.responseInterceptor()
    }

    private static axiosInstance = axios.create(defaultConfig)

    // 请求拦截器
    private requestInterceptor() {
      Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
        return config
      }, error => {
        return Promise.reject(error)
      })
    }

    // 响应拦截器
    private responseInterceptor() {
      Http.axiosInstance.interceptors.response.use((res: AxiosResponce) => {
        return res
      }, error => {
        return Promise.reject(error)
      })
    }

    /**
     * 封装请求
     */
    // get
    public get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
      return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }

    // post
    public post<T>(url: string, data: AxiosRequestConfig): Promise<T> {
      return Http.axiosInstance.post(url, data).then(res => res.data).catch()
    }
  }

  export default new Http()
  ```
