// import axios from 'axios';
// import Config from 'react-native-config';
// import { store } from '../store/store';
// import { logout } from '../features/auth/authSlice';

// const api = axios.create({
//   baseURL: Config.API_BASE,
//   timeout: 25000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.request.use(
//   config => {
//     const state = store.getState();
//     const token = state.auth.authToken; // Get the token from Redux state
//     console.log('TOKEN', token, config.url);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// api.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const statusCode = error.response.status;
//     if (statusCode === 500 || statusCode === 400 || statusCode === 401) {
//       try {
//         error?.response?.data?.includes('AUTHENTICATION_FAILED')
//           ? store.dispatch(logout()) // Call redux reducer for logout
//           : null;
//       } catch (err) {}
//     }
//     console.error('API_SERVICE::Interceptor::ERROR', error);
//     if (error?.response?.data && typeof error?.response?.data === 'object') {
//       return Promise.reject(error);
//     } else {
//       if (error?.response?.data?.includes('</')) {
//         return Promise.reject({ message: 'Unexpected error occurred' });
//       }
//     }
//     return Promise.reject(error);
//   },
// );

// const apiGet = async (url: string, params?: any) => {
//   try {
//     console.log('API_SERVICE::apiGet', url, params);
//     const response = await api.get(url, { params });
//     return response.data.data;
//   } catch (error) {
//     console.error('API_SERVICE::apiGet::ERROR', url, error);
//     if (error?.response?.data) {
//       throw error.response.data;
//     }
//     throw error;
//   }
// };

// const apiPost = async (url: string, data: any) => {
//   try {
//     console.log('API_SERVICE::apiPost', url, data);
//     const response = await api.post(url, data);
//     return response.data.data;
//   } catch (error) {
//     console.error('API_SERVICE::apiPost::ERROR', url, error);
//     if (error?.response?.data) {
//       throw error.response.data;
//     }
//     throw error;
//   }
// };

// const apiPut = async (url: string, data: any) => {
//   try {
//     console.log('API_SERVICE::apiPut', url, data);
//     const response = await api.put(url, data);
//     return response.data.data;
//   } catch (error) {
//     console.error('API_SERVICE::apiPut::ERROR', url, error);
//     if (error?.response?.data) {
//       throw error.response.data;
//     }
//     throw error;
//   }
// };

// const apiDelete = async (url: string, data: any) => {
//   try {
//     console.log('API_SERVICE::apiDelete', url, data);
//     const response = await api.delete(url, data);

//     return response.data.data;
//   } catch (error) {
//     console.error('API_SERVICE::apiDelete::ERROR', url, error);
//     if (error?.response?.data) {
//       throw error.response.data;
//     }
//     throw error;
//   }
// };

// const apiUploadImages = async (url: string, data: any) => {
//   const { file, uploadsParam } = data.data;
//   try {
//     console.log('API_SERVICE::apiPost', url, data);
//     const getUrls = await api.post(url, uploadsParam);

//     const uploadFile = getUrls.data.data?.upload?.fields;
//     const formData = new FormData();

//     const keys = Object.keys(uploadFile);

//     for (let i = 0; i < keys.length; i++) {
//       formData.append(keys[i], uploadFile[keys[i]]);
//     }

//     formData.append('file', {
//       uri: file.path ?? '',
//       type: file.mime,
//       name: file.filename,
//     } as any);

//     await axios.post(getUrls.data.data.upload.url, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });

//     return (
//       getUrls.data.data?.upload.url + '/' + getUrls.data.data?.upload.fields.key
//     );
//   } catch (error) {
//     console.error('API_SERVICE::apiPost::ERROR', url, error);
//     throw error;
//   }
// };

// const apiUploadFiles = async (url: string, data: any) => {
//   const { file, uploadsParam } = data.data;
//   try {
//     console.log('API_SERVICE::apiPost', url, data);
//     const getUrls = await api.post(url, uploadsParam);

//     const uploadFile = getUrls.data.data?.upload?.fields;
//     const formData = new FormData();

//     const keys = Object.keys(uploadFile);

//     for (let i = 0; i < keys.length; i++) {
//       formData.append(keys[i], uploadFile[keys[i]]);
//     }

//     formData.append('file', {
//       uri: file.uri ?? '',
//       type: file.type,
//       name: file.name,
//     } as any);

//     await axios.post(getUrls.data.data.upload.url, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });

//     return (
//       getUrls.data.data?.upload.url + '/' + getUrls.data.data?.upload.fields.key
//     );
//   } catch (error) {
//     console.error('API_SERVICE::apiPost::ERROR', error);
//     throw error;
//   }
// };

// export { apiGet, apiPost, apiPut, apiDelete, apiUploadImages, apiUploadFiles };
