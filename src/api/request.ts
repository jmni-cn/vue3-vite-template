import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { getNavigatorLanguage } from '@/utils/locale';
import { generateSignature } from 'jmni'
const locale = localStorage.getItem('lang') || getNavigatorLanguage()

export const STATIC_URL = import.meta.env.VITE_STATIC_URL
export const BASE_URL = import.meta.env.VITE_API_URL


const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});
request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200 || response.status === 201) {
      const res = response.data
      if(res.code === -1 && res.message){
        if (window.$message) {
          window.$message.warning(res.message);
        }
      }
      if(res.code === -2 && res.message){
        if (window.$dialog) {
          window.$dialog.warning({
            title: res.title,
            showIcon: false,
            icon: ()=>{},
            content: res.message,
            positiveText: '确认',
            maskClosable: false,
            closable: false,
          })
        }
      }
      return res
    } else {
      return Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    if(error.config?.url?.includes('notice')){
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
);
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.params = { ...config.params, locale, ...generateSignature(), os: navigator.language }

    return config
  },
  (error: AxiosError) => Promise.reject(error)
)
export default request;
export const get = (url:string, data?:object) => request.get(url, { params: data })
export const post = (url:string, data?:object) => request.post(url, data)



