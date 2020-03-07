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
        <div class="nav_box-items">
          <div class="nav_box-items-title">
            <a href="#"><span>首页</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'XHeader' })
export default class Home extends Vue {
  private name: string = '';
}
</script>
