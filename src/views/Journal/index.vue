<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import XFooter from '@/components/XFooter/index.vue';
import XSidebar from '@/components/Layout/XSidebar/index.vue';
import XHeader from '@/components/XHeader/index.vue';
import XNews from '@/components/XNews/index.vue';
@Component({
  name: 'Journal',
  components: {
    XHeader,
    XFooter,
    XSidebar,
    XNews
  }
})
export default class Journal extends Vue {
  private routeList = [
    {
      name: '宝宝成长',
      to: '/Journal/growing'
    },
    {
      name: '宝宝趣事',
      to: '/Journal/interesting'
    },
    {
      name: '生活点滴',
      to: '/Journal/bit'
    },
    {
      name: '育儿生活',
      to: '/Journal/life'
    },
    {
      name: '育儿心得',
      to: '/Journal/experience'
    }
  ];

  created() {
    console.log(this.$route);
  }
}
</script>
