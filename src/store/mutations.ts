import { NewsItem } from "@/api";
import { RootState } from "./state";

export enum MutationTypes {
  SET_NEWS = "SET_NEWS",
  SET_ASK = "SET_ASK",
  SET_JOBS = "SET_JOBS",
}

export const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
  [MutationTypes.SET_ASK](state: RootState, ask: NewsItem[]) {
    state.ask = ask;
  },
  [MutationTypes.SET_JOBS](state: RootState, jobs: NewsItem[]) {
    state.jobs = jobs;
  },
};

export type Mutations = typeof mutations;

// export default {
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
