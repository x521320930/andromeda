declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'vue-awesome-swiper' {
  export const swiper: any;
  export const swiperSlide: any;
  export interface VueAwesomeSwiper {
    Swiper: any;
    swiper: any;
    swiperSlide: any;
    install(): void;
  }
}
