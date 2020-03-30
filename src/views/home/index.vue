<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

<script lang="ts">
import { swiper, swiperSlide } from 'vue-awesome-swiper';
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
    swiper,
    swiperSlide,
    XNews
  }
})
export default class Home extends Vue {
  private name: string = '';
  private hours: string = '00';
  private minutes: string = '00';
  private seconds: string = '00';
  private swiperOption = {
    autoplay: true,
    freeModeMomentumBounce: false,
    resistanceRatio: 0,
    pagination: {
      el: '.carousel-swiper-scrollbar',
      type: 'custom',
      bulletActiveClass: 'carousel-swiper-pagination-active'
      // renderCustom: (swiper: any, current: number, total: number) => {
      //   let html = '';
      //   for (let i = 0; i < total; i++) {
      //     if (i === current - 1) {
      //       html += '<span class="carousel-swiper-pagination-items"></span>';
      //     } else {
      //       html += '<span class="carousel-swiper-pagination-items"></span>';
      //     }
      //   }
      //   return html;
      // }
    }
  };
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
  private carouselSwiperPaginationActive: number = 0;
  // // 操作 轮破图按钮
  // private handleSarouselSwiperPagination(i: number) {
  //   this.carouselSwiperPaginationActive = i;
  //   // .slideTo(0, 1000, false);
  //   // this.$refs.carouselSwiper.swiper.slideTo(0, 1000, false);
  //   // console.log();
  // }
}
</script>
