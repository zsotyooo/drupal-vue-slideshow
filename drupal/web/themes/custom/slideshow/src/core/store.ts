import { Module } from 'vuex';
import { getters } from './store/getters';
import { actions } from './store/actions';
import { mutations } from './store/mutations';
import { State } from './types';
import { RootState } from '@/types';

export const state: State = {
  node: undefined,
  paragraphs: undefined,
  activeParagraphId: undefined,
};

const namespaced = true;

export const coreState: Module<State, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
