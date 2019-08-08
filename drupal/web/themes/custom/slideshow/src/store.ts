import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { coreState } from './core/store';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.1.0',
  },
  modules: {
    coreState,
  },
};

export default new Vuex.Store<RootState>(store);
