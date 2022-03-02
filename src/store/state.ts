import { NewsItem } from "@/api";

export const state = {
  news: [] as NewsItem[],
};

export type RootState = typeof state;
