import { MutationTree } from 'vuex';
import { State, NodeData, ParagraphData } from '../types';

export const mutations: MutationTree<State> = {
  setNode(state, node?: NodeData) {
    state.node = node;
  },
  setParagraphs(state, paragraphs?: ParagraphData[]) {
    state.paragraphs = paragraphs;
  },
  setActiveParagraphId(state, activeParagraphId?: number) {
    state.activeParagraphId = activeParagraphId;
  },
};
