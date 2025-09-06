import axios from 'axios';
import Config from 'react-native-config';

export const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 15000,
});

apiClient.interceptors.request.use(config => {
  const apiKey = Config.NEWS_API_KEY;
  config.headers = config.headers ?? {};
  if (apiKey) {
    (config.headers as any)['X-Api-Key'] = apiKey;
  }
  return config;
});
