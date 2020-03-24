<template>
  <header class="header">
    <div class="header-container">
      <div class="header-container__logo_box">
        <a href="#" class="logo-jump-home">
          <span class="logo-text-zh">夏艺洹博客</span>
          <span class="logo-text-en">XIA YI HUAN BLOG</span>
        </a>
      </div>
      <div class="header-container__nav_box">
        <div class="nav_box-items" v-for="(items, i) in navList" :key="i">
          <div class="nav_box-items-title">
            <a class="title-href" :href="items.children ? 'javascript:;' : items.href">
              <span>{{ items.name }}</span>
            </a>
            <div v-if="items.children" class="nav_box-sub-menu">
              <a :href="node.href" v-for="(node, n) in items.children" :key="n">{{ node.name }}</a>
              <span class="sub-menu-decorate"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'XHeader' })
export default class XHeader extends Vue {
  private name: string = '';
  private navList = [
    {
      name: '首页',
      href: '#/'
    },
    {
      name: '精彩日记',
      href: '#/Journal',
      children: [
        {
          name: '宝宝成长',
          href: '#/Journal'
        },
        {
          name: '宝宝趣事',
          href: '#/Journal'
        },
        {
          name: '生活点滴',
          href: '#/'
        },
        {
          name: '育儿生活',
          href: '#/'
        },
        {
          name: '育儿心得',
          href: '#/'
        }
      ]
    },
    {
      name: '宝宝相册',
      href: '#/album'
    },
    {
      name: '留言板',
      href: '#/'
    }
  ];
}
</script>
