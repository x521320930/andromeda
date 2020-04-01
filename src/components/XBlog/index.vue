<template>
  <div class="article-container animated">
    <div class="time-box">
      <img class="time-bg" src="~@/assets/imgs/home/time-bg.jpg" alt="图" />
      <div class="items-container">
        <div class="time-box-items">
          <div class="items-num">{{ hours | frmatTime }}</div>
          <div class="items_en">hours</div>
        </div>
        <div class="time-box-items">
          <div class="items-dir">:</div>
        </div>
        <div class="time-box-items">
          <div class="items-num">{{ minutes | frmatTime }}</div>
          <div class="items_en">minutes</div>
        </div>
        <div class="time-box-items">
          <div class="items-dir">:</div>
        </div>
        <div class="time-box-items">
          <div class="items-num">{{ seconds | frmatTime }}</div>
          <div class="items_en">seconds</div>
        </div>
      </div>
    </div>
    <div class="about-box">
      <div class="about-me"><i class="fa fa-bookmark"></i><span>关于博主</span></div>
      <div class="blog-box">
        <div class="blog-info-items">
          <span class="blog-info-items-label">博主年龄：</span>
          <span class="blog-info-items-text">1年4月</span>
        </div>
        <div class="blog-info-items">
          <span class="blog-info-items-label">博主爱好：</span>
          <span class="blog-info-items-text">我最喜欢 吃、睡、玩</span>
        </div>
        <div class="blog-info-items">
          <span class="blog-info-items-label">个人描述：</span>
          <span class="blog-info-items-text">人总是珍惜未得到的，而遗忘了所拥有的。</span>
        </div>
      </div>
    </div>
    <div class="hot-Visit-container">
      <div class="hot-Visit-items">
        <span class="hot-Visit-title">文章</span>
        <span class="hot-Visit-text">00</span>
      </div>
      <div class="hot-Visit-items">
        <span class="hot-Visit-title">评论</span>
        <span class="hot-Visit-text">00</span>
      </div>
      <div class="hot-Visit-items">
        <span class="hot-Visit-title">访问</span>
        <span class="hot-Visit-text">00</span>
      </div>
      <div class="hot-Visit-items">
        <span class="hot-Visit-title">用户</span>
        <span class="hot-Visit-text">00</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'XBlog',
  filters: {
    frmatTime(val: number) {
      return val > 10 ? val : `0${val}`;
    }
  }
})
export default class XBlog extends Vue {
  private name: string = '';
  private hours = 0;
  private minutes = 0;
  private seconds = 0;

  private time: any = null;

  private getDate() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  private hanldeTimeoutTime() {
    this.time = setInterval(this.getDate, 1000);
  }

  mounted() {
    this.hanldeTimeoutTime();
  }

  beforeDestroy() {
    if (this.time) {
      clearInterval(this.time);
    }
  }
}
</script>
