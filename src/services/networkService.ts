import axios, { AxiosInstance, AxiosResponse } from 'axios';

class NetworkService {
  private _instance: AxiosInstance;
  token = '';

  // Network service constructor
  constructor(baseURL: string, timeout: number) {
    this._instance = this._createInstance(baseURL, timeout);
    this._addResponseInterceptor();
    this._addRequestInterceptor();
  }

  // Set Authorization header
  setAuthorizationHeader(token: string) {
    this.token = token;
  }

  // Remove Authorization header
  removeAuthorizationHeader() {
    this.token = '';
  }

  // Create a new instance of axios with a custom config
  _createInstance(baseURL: string, timeout: number): AxiosInstance {
    return axios.create({
      baseURL,
      timeout,
    });
  }

  // Get the data from request
  async _handleResponse(response: any) {
    try {
      return await response.data;
    } catch (error) {
      return undefined;
    }
  }

  // GET request wrapper
  async get(url: string, params?: any, headers?: any) {
    return this._instance.get(url, { params, headers });
  }

  // POST request wrapper
  async post(url: string, data: any, params?: any) {
    return this._instance.post(url, data, { params });
  }

  // PUT request wrapper
  async put(url: string, data: any, params?: any) {
    return this._instance.put(url, data, { params });
  }

  // DELETE request wrapper
  async delete(url: string) {
    return this._instance.delete(url);
  }

  // Set request interceptor
  _addRequestInterceptor() {
    this._instance.interceptors.request.use(
      (config) => {
        // Do not send authorization header if it is prevented:
        if (config.headers.Authorization === false) {
          delete config.headers.Authorization;
        } else if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }

        return config;
      },
      // Do something with request error
      (error: any) => Promise.reject(error),
    );
  }

  // Set response interceptor
  _addResponseInterceptor() {
    this._instance.interceptors.response.use(
      (response: AxiosResponse<any>) => this._handleResponse(response),
      (error: any) => {
        throw error;
      },
    );
  }
}

const createNetworkService = (baseURL: string) => {
  return new NetworkService(baseURL, 1000 * 30); // default 30 sec
};

// TODO: The base URL should be added
const baseURL = '';

const networkService = createNetworkService(baseURL || '');

export default networkService;
