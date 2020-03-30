<template>
  <div class="layout-sideBar-container bounceInRight animated">
    <!-- 博主 -->
    <x-blog></x-blog>
    <!-- 热门文章 -->
    <x-popular-articles></x-popular-articles>
    <!-- 最新评论 -->
    <x-latest-comment></x-latest-comment>
  </div>
</template>

<script lang="ts">
import XBlog from '@/components/XBlog/index.vue';
import XPopularArticles from '@/components/XPopularArticles/index.vue';
import XLatestComment from '@/components/XLatestComment/index.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'XSidebar',
  components: {
    XBlog,
    XPopularArticles,
    XLatestComment
  }
})
export default class XSidebar extends Vue {}
</script>
