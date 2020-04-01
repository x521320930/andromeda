<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

<script lang="ts">
import XHeader from '@/components/XHeader/index.vue';
import XSidebar from '@/components/Layout/XSidebar/index.vue';
import { Component, Vue } from 'vue-property-decorator';
import XFooter from '@/components/XFooter/index.vue';
import XNews from '@/components/XNews/index.vue';
@Component({
  name: 'home',
  components: {
    XHeader,
    XSidebar,
    XFooter,
    XNews
  }
})
export default class Home extends Vue {
  private swiperIndex = 0;
  private swiperTime: any = null;
  private swiperList = [
    {
      jump: 'javascript:;',
      text: '猛男诞生记',
      icon: 'https://wuzuhua.wuzuhua.cn/dm'
    },
    {
      jump: 'javascript:;',
      text: '猛男诞生记',
      icon: 'https://wuzuhua.wuzuhua.cn/dm'
    },
    {
      jump: 'javascript:;',
      text: '猛男诞生记',
      icon: 'https://wuzuhua.wuzuhua.cn/dm'
    },
    {
      jump: 'javascript:;',
      text: '猛男诞生记',
      icon: 'https://wuzuhua.wuzuhua.cn/dm'
    }
  ];
  // 分页操作
  private handleSwiperPagination(index: number) {
    if (this.swiperTime) {
      clearInterval(this.swiperTime);
    }
    const swiper = this.$refs.swiper as HTMLElement;
    const offsetWidth = swiper.offsetWidth;
    this.swiperIndex = index;
    this.setSwiperStyle(swiper, this.swiperIndex, offsetWidth);
    this.handleSwipeTimeout();
  }
  // 循环Swipe 倒计时
  private handleSwipeTimeout() {
    this.swiperTime = setInterval(() => {
      const swiper = this.$refs.swiper as HTMLElement;
      const offsetWidth = swiper.offsetWidth;
      this.swiperIndex++;
      if (this.swiperIndex >= swiper.children.length) {
        this.swiperIndex = 0;
      }
      this.setSwiperStyle(swiper, this.swiperIndex, offsetWidth);
    }, 5000);
  }
  // swiper设置样式
  private setSwiperStyle(swiper: HTMLElement, index: number, w: number) {
    swiper.style.transitionDuration = '380ms';
    swiper.style.transform = `translate3d(-${index * w}px, 0px, 0px)`;
    setTimeout(() => {
      swiper.style.transitionDuration = '0ms';
    }, 0);
  }
  mounted() {
    // 倒计时轮播
    this.handleSwipeTimeout();
  }

  beforeDestroy() {
    if (this.swiperTime) {
      clearInterval(this.swiperTime);
    }
  }
}
</script>
