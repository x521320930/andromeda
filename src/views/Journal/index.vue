<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>

<script lang="ts">
import XHeader from '@/components/XHeader/index.vue';
import { Component, Vue } from 'vue-property-decorator';
import XFooter from '@/components/XFooter/index.vue';
@Component({
  name: 'Journal',
  components: {
    XHeader,
    XFooter
  }
})
export default class Journal extends Vue {
  private name: string = '';
  private hours: string = '00';
  private minutes: string = '00';
  private seconds: string = '00';
}
</script>
