<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SlideshowApp from './core/components/SlideshowApp.vue';

@Component({
  template: '#app-template',
  components: {
    SlideshowApp,
  },
})
export default class App extends Vue {}
</script>
