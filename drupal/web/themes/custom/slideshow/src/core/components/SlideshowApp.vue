<template>
  <component :is="mainComponent" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DrupalWebappData, NodeData } from '@/core/types';
import RevealSlideshow from '@/reveal/components/RevealSlideshow.vue';
import StartScreen from './StartScreen.vue';

const { Action, Getter } = namespace('coreState');

const componentMap: {[index: string]: Vue.Component} = {
  simple_slideshow: RevealSlideshow,
};

@Component
export default class SlideshowApp extends Vue {
  @Action public fetchNode: (id: number) => Promise<DrupalWebappData>;

  @Getter public node: NodeData;

  @Prop() private nid!: number;

  public mounted() {
    this.fetchNode(this.nid);
  }

  get mainComponent(): Vue.Component {
    if (this.node && componentMap[this.node.type]) {
      return componentMap[this.node.type];
    }
    return StartScreen;
  }
}
</script>
