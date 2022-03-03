import { NewsItem } from "@/api";

export const state = {
  news: [] as NewsItem[],
  ask: [] as NewsItem[],
  jobs: [] as NewsItem[],
};

export type RootState = typeof state;
