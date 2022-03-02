// store/types.ts
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Getters } from "./getters";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(key: K, payload?: P, options?: CommitOptions): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(key: K, payload?: Parameters<Actions[K]>[1], options?: DispatchOptions): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

/**
 * project level에서 재정의 하는 작업
 * Vuex의 mutation type만 MyMutations로 재할당 해주는 것
 * 결론적으로 node_modules/vuex/types/vue.d.ts에 정의 되어 있는 mutation이 MyMutations으로 변경된다(action도 마찬가지)
 */
export type MyStore = Omit<Store<RootState>, "commit" | "dispatch" | "getters"> & MyMutations & MyActions & MyGetters;
