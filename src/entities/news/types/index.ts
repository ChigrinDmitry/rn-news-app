export type ApiStatus = 'ok' | 'error';

export interface NewsSource {
    id: string | null;
    name: string;
}

export interface NewsArticle {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string | null;
    content: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
}

export interface NewsSuccessResponse {
    status: 'ok';
    totalResults: number;
    articles: NewsArticle[];
}

export interface NewsErrorResponce {
    status: 'error';
    code: string;
    message: string;
}

export type NewsResponce = NewsSuccessResponse | NewsErrorResponce;
