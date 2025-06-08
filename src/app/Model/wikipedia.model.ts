export interface Wikipedia {
  link: string;
  title: string;
  description: string;
}

export interface WikipediaResponse {
  search_results: Wikipedia[];
}
