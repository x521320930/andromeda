<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script lang="ts">
import XHeader from '@/components/XHeader/index.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'home',
  components: {
    XHeader
  }
})
export default class Home extends Vue {
  private name: string = '';
}
</script>
