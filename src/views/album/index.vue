<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

<script lang="ts">
import XHeader from '@/components/XHeader/index.vue';
import XSidebar from '@/components/Layout/XSidebar/index.vue';
import XFooter from '@/components/XFooter/index.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'album',
  components: {
    XHeader,
    XFooter,
    XSidebar
  }
})
export default class Album extends Vue {
  private name: string = '';
  private hours: string = '00';
  private minutes: string = '00';
  private seconds: string = '00';
  private albumList: Array<any> = [
    {
      url: 'https://wuzuhua.wuzuhua.cn/dm',
      title: '我的寶寶',
      watch: '11111',
      remark: '2323',
      user: '夏艺洹',
      time: '2020-03-07'
    },
    {
      url: 'https://wuzuhua.wuzuhua.cn/dm',
      title: '我的寶寶',
      watch: '11111',
      remark: '2323',
      user: '夏艺洹',
      time: '2020-03-07'
    },
    {
      url: 'https://wuzuhua.wuzuhua.cn/dm',
      title: '我的寶寶',
      watch: '11111',
      remark: '2323',
      user: '夏艺洹',
      time: '2020-03-07'
    },
    {
      url: 'https://wuzuhua.wuzuhua.cn/dm',
      title: '我的寶寶',
      watch: '11111',
      remark: '2323',
      user: '夏艺洹',
      time: '2020-03-07'
    },
    {
      url: 'https://wuzuhua.wuzuhua.cn/dm',
      title: '我的寶寶',
      watch: '11111',
      remark: '2323',
      user: '夏艺洹',
      time: '2020-03-07'
    },
    {
      url: 'https://wuzuhua.wuzuhua.cn/dm',
      title: '我的寶寶',
      watch: '11111',
      remark: '2323',
      user: '夏艺洹',
      time: '2020-03-07'
    }
  ];
}
</script>
