import { GetterTree } from 'vuex';
import { State, NodeData, ParagraphData } from '../types';
import { RootState } from '@/types';

export const getters: GetterTree<State, RootState> = {
  node(state): NodeData | undefined {
    const { node } = state;
    return node;
  },
  paragraphs(state): ParagraphData[] | undefined {
    const { paragraphs } = state;
    return paragraphs;
  },
  activeParagraphId(state): number | undefined {
    const { activeParagraphId } = state;
    return activeParagraphId;
  },
  activeParagraph(state): ParagraphData | undefined {
    const { paragraphs, activeParagraphId } = state;
    if (paragraphs === undefined || activeParagraphId === undefined) {
      return;
    }
    return paragraphs.find((p) => p.id === activeParagraphId);
  },
};
