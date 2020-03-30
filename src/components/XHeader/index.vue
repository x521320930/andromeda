<template>
  <header class="layout-header">
    <div class="header">
      <div class="header-container">
        <div class="acnavmain">
          <div class="acnavblur"></div>
        </div>
        <div class="header-container__logo_box">
          <a href="#" class="logo-jump-home">
            <span class="logo-text-zh">夏艺洹博客</span>
            <!-- <span class="logo-text-en">XIA YI HUAN BLOG</span> -->
          </a>
        </div>
        <div class="header-container__nav_box">
          <div class="nav_box-items" v-for="(items, i) in navList" :key="i">
            <div class="nav_box-items-title">
              <router-link class="title-href" v-if="items.meta.nav" :to="items.path">
                <span>{{ items.meta.title }}</span>
              </router-link>
              <!-- <div v-if="items.children" class="nav_box-sub-menu">
                <a
                  href="javascript:;"
                  @click="jump(node)"
                  v-for="(node, n) in items.children"
                  :key="n"
                  >{{ node.name }}</a
                >
                <span class="sub-menu-decorate"></span>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-dir"></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { routes } from '@/router';
@Component({ name: 'XHeader' })
export default class XHeader extends Vue {
  private name: string = '';
  private navList = routes;
  private jump(data: { name: string; href: string }) {
    const { path } = this.$route;
    if (path === data.href) return;
    this.$router.push(data.href);
  }
}
</script>

{ name: '首页', href: '/' }, { name: '宝宝成长', href: '/Journal' }, { name: '宝宝趣事', href:
'/Journal' }, { name: '生活点滴', href: '/Journal' }, { name: '育儿生活', href: '/Journal' }, {
name: '育儿心得', href: '/Journal' }, { name: '宝宝相册', href: '/album' }
