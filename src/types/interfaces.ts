export interface ISource {
    id: string | null;
    name: string;
}

export interface IArticles {
    source: ISource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;

}

export interface INewsResponce {
    status: string;
    totalResults: number;
    articles: IArticles[];
}

export interface ISourceResponce {
    status: string;
    sources: ISource[];
}