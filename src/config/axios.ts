/* eslint-disable symbol-description */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { notification } from 'antd';
import i18next from 'i18next';

import { localStorage } from '@/utils/storage';
import { LOCAL_STORAGE_KEY } from '@/constants';

const singletonEnforcer = Symbol();
class AxiosClient {
  private axiosClient: AxiosInstance;

  private static axiosClientInstance;

  constructor(enforcer: any) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot initialize Axios client single instance');
    }

    this.axiosClient = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    });
    this.axiosClient.interceptors.request.use(
      (configure: InternalAxiosRequestConfig) => {
        const config = configure;
        const token = localStorage().get(LOCAL_STORAGE_KEY.ACCESS_TOKEN) ?? '';
        if (token) {
          config.headers['x-access-token'] = token;
        }
        return config;
      },
      (error: any): any => Promise.reject(error)
    );

    this.axiosClient.interceptors.response.use(
      (response: AxiosResponse) => response,
      error => {
        if (error.response) {
          const { data, status } = error.response;

          switch (status) {
            case 400:
              break;
            case 500:
              notification.error({
                message: '',
                description: i18next.t('error.SERVER_ERROR' as any),
                duration: 4,
              });
              break;
            case 401:
              window.location.replace('/login');
              break;
            case 404:
              break;
            case 403:
              break;
            default:
              break;
          }
          if (status !== 401 && status < 500) {
            if (data.errors?.message) {
              const { message } = data.errors || {};
              notification.error({
                message: '',
                description: i18next.t(`error.${message}` as any),
                duration: 4,
              });
            }
          }

          throw data;
        } else {
          throw error;
        }
      }
    );
  }

  static get instance(): AxiosClient {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer);
    }

    return this.axiosClientInstance;
  }

  setHeader = async (userToken: string): Promise<void> => {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken ?? null}`;
  };

  get = async (url: string, config: any = {}): Promise<any> => {
    return this.axiosClient.get(url, {
      ...config,
      headers: this.axiosClient.defaults.headers,
    });
  };

  post = async (url: string, data: any, config = {}): Promise<any> => {
    return this.axiosClient.post(url, data, {
      ...config,
      headers: this.axiosClient.defaults.headers,
    });
  };

  update = async (url: string, data: any, config = {}): Promise<any> =>
    this.axiosClient.put(url, data, {
      ...config,
      headers: this.axiosClient.defaults.headers,
    });

  put = async (url: string, data: any, config = {}): Promise<any> =>
    this.axiosClient.put(url, data, {
      ...config,
      headers: this.axiosClient.defaults.headers,
    });

  patch = async (url: string, data: any, config = {}): Promise<any> =>
    this.axiosClient.patch(url, data, {
      ...config,
      headers: this.axiosClient.defaults.headers,
    });

  delete = async (url: string, config: AxiosRequestConfig = {}): Promise<any> =>
    this.axiosClient.delete(
      url,
      // assign(config, { headers: this.axiosClient.defaults.headers })
      {
        ...config,
        headers: this.axiosClient.defaults.headers,
      }
    );
}

export default AxiosClient.instance;
