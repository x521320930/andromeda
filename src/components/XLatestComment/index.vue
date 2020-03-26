<template>
  <div class="latest-comment-container">
    <div class="layout-sideBar-title"><i class="fa fa-bookmark"></i><span>最新评论</span></div>
    <div class="latest-comment-ct">
      <a class="latest-comment-ct-items" href="javascript:;">
        <i></i>
        <span class="user"></span>
        <span class="user">夏艺洹</span>
        <span class="ct">我已经评论过了</span>
        <span class="time">刚刚</span>
      </a>
      <a class="latest-comment-ct-items" href="javascript:;">
        <i></i>
        <span class="user"></span>
        <span class="user">夏艺洹</span>
        <span class="ct">我已经评论过了</span>
        <span class="time">刚刚</span>
      </a>
      <a class="latest-comment-ct-items" href="javascript:;">
        <i></i>
        <span class="user"></span>
        <span class="user">夏艺洹</span>
        <span class="ct">我已经评论过了</span>
        <span class="time">刚刚</span>
      </a>
      <a class="latest-comment-ct-items" href="javascript:;">
        <i></i>
        <span class="user"></span>
        <span class="user">夏艺洹</span>
        <span class="ct">我已经评论过了</span>
        <span class="time">刚刚</span>
      </a>
      <a class="latest-comment-ct-items" href="javascript:;">
        <i></i>
        <span class="user"></span>
        <span class="user">夏艺洹</span>
        <span class="ct">我已经评论过了</span>
        <span class="time">刚刚</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'XLatestComment' })
export default class XLatestComment extends Vue {
  private name: string = '';
  private hours: string = '00';
  private minutes: string = '00';
  private seconds: string = '00';
}
</script>
