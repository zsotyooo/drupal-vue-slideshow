import { ActionTree } from 'vuex';
import api from '../api/api';
import { DrupalWebappData, State, ErrorData } from '../types';
import { RootState } from '@/types';

export const actions: ActionTree<State, RootState> = {
  async fetchNode({ commit }, id: number): Promise<DrupalWebappData> {
    commit('setNode', undefined);
    commit('setParagraphs', undefined);
    commit('setActiveParagraphId', undefined);
    return new Promise( (resolve, reject) => {
      api.fetchNode(id).then((payload) => {
        const { nid, type, paragraph } = payload;
        commit('setNode', { nid, type });
        commit('setParagraphs', paragraph);
        resolve(payload);
      }, (error: ErrorData) => {
        reject(error);
        commit('setError', error);
      });
    });
  },
};
