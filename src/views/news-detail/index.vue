<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

<script lang="ts">
import XHeader from '@/components/XHeader/index.vue';
import { Component, Vue } from 'vue-property-decorator';
import XFooter from '@/components/XFooter/index.vue';
import XSidebar from '@/components/Layout/XSidebar/index.vue';
@Component({
  name: 'NewsDetail',
  components: {
    XHeader,
    XFooter,
    XSidebar
  }
})
export default class NewsDetail extends Vue {}
</script>
