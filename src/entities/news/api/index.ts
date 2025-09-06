import { apiClient } from '../../../shared/api/client';
import {
  NewsResponce,
  NewsSuccessResponse,
  NewsArticle,
  NewsErrorResponce,
} from '../types';

const assertOk = (data: NewsResponce) => {
  if (data.status === 'ok') return data;
  throw new Error(`${data.code}: ${data.message}`);
};

export const newsApi = {
  async getTopHeadlines(params: {
    page?: number;
    pageSize?: number;
    country?: string;
    category?: string;
  }) {
    const res = await apiClient.get<NewsResponce>('/top-headlines', {
      params: { page: 1, pageSize: 10, country: 'us', ...params },
    });
    const ok = assertOk(res.data);
    return { articles: ok.articles as NewsArticle[], total: ok.totalResults };
  },

  async searchNews(query: string, page = 1, pageSize = 10) {
    const res = await apiClient.get<NewsResponce>('/everything', {
      params: { q: query, page, pageSize },
    });
    const ok = assertOk(res.data);
    return { articles: ok.articles as NewsArticle[], total: ok.totalResults };
  },

  async getNewsByCategory(category: string, page: number = 1) {
    const res = await apiClient.get<NewsResponce>('/top-headlines', {
      params: { category, country: 'us', page, pageSize: 10 },
    });
    const ok = assertOk(res.data);
    return { articles: ok.articles as NewsArticle[], total: ok.totalResults };
  },
};
