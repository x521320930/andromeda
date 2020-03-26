<template>
  <div class="popular-articles-container">
    <div class="layout-sideBar-title"><i class="fa fa-bookmark"></i><span>热门文章</span></div>
    <div class="popular-articles-content">
      <a class="popular-articles-content-items" href="javascript:;">
        <img
          class="items-icon"
          src="https://wuzuhua.cn/wp-content/uploads/2019/01/20190124210321663.jpg"
          alt=""
        />
        <div class="items-content">
          <span class="text">2019年QQ透明头像与QQ动态头像设置方法</span>
          <span class="time">2019-01-24</span>
        </div>
      </a>
      <a class="popular-articles-content-items" href="javascript:;">
        <img
          class="items-icon"
          src="https://wuzuhua.cn/wp-content/uploads/2019/01/20190124210321663.jpg"
          alt=""
        />
        <div class="items-content">
          <span class="text">2019年QQ透明头像与QQ动态头像设置方法</span>
          <span class="time">2019-01-24</span>
        </div>
      </a>
      <a class="popular-articles-content-items" href="javascript:;">
        <img
          class="items-icon"
          src="https://wuzuhua.cn/wp-content/uploads/2019/01/20190124210321663.jpg"
          alt=""
        />
        <div class="items-content">
          <span class="text">2019年QQ透明头像与QQ动态头像设置方法</span>
          <span class="time">2019-01-24</span>
        </div>
      </a>
      <a class="popular-articles-content-items" href="javascript:;">
        <img
          class="items-icon"
          src="https://wuzuhua.cn/wp-content/uploads/2019/01/20190124210321663.jpg"
          alt=""
        />
        <div class="items-content">
          <span class="text">2019年QQ透明头像与QQ动态头像设置方法</span>
          <span class="time">2019-01-24</span>
        </div>
      </a>
      <a class="popular-articles-content-items" href="javascript:;">
        <img
          class="items-icon"
          src="https://wuzuhua.cn/wp-content/uploads/2019/01/20190124210321663.jpg"
          alt=""
        />
        <div class="items-content">
          <span class="text">2019年QQ透明头像与QQ动态头像设置方法</span>
          <span class="time">2019-01-24</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'XPopularArticles' })
export default class XPopularArticles extends Vue {
  private name: string = '';
  private hours: string = '00';
  private minutes: string = '00';
  private seconds: string = '00';
}
</script>
