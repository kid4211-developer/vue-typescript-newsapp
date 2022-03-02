import { MyStore } from "@/store/types";
import Vue from "vue";

// NOTE : node_module/vuex/types/vue.d.ts file을 삭제해줘야 아래 type이 정상 추론됨
// tsconfig.json의 include 배열에 해당 확장 module path를 추가해준다
declare module "vue/types/options" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}
