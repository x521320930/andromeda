<template>
  <div class="journalism-news">
    <div
      class="journalism-news-items journalism-animated flipInX animated"
      v-for="(item, i) in swiperList"
      :key="i"
    >
      <div class="journalism-news-items-icon">
        <a><img src="https://wuzuhua.wuzuhua.cn/dm" alt=""/></a>
      </div>
      <div class="journalism-news-items-info">
        <div class="items-info-title">
          <a href="javascript:;" class="title-type">
            宝宝成长
            <i></i>
          </a>
          <h2><a>FreeMove-系统盘安装的软件转移至其他盘</a></h2>
        </div>
        <div class="items-info-content">
          <span
            >我们在重装系统时C盘的文件必须清空，这样已经安装在C盘的软件也要被清空，现在如何把已经安装在系统盘的软件，转移到其他盘呢？直接剪切或拷贝显然是不行的，这么做的话，大多软件都会直接打不开。你当然可以直接</span
          >
        </div>
        <div class="items-info-meta">
          <span><i class="fa fa-user"></i>夏艺洹</span>
          <span><i class="fa fa-eye"></i>阅读(61)</span>
          <span><i class="fa fa-comments-o"></i>评论(3)</span>
          <span><i class="fa fa-clock-o"></i>2020-03-07</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'XNews' })
export default class XNews extends Vue {
  private swiperList = [
    {
      jump: 'javascript:;',
      text: '',
      title: 'FreeMove-系统盘安装的软件转移至其他盘',
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
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mini.scss';
.journalism-news {
  width: 100%;
  border-radius: 5px;
  .journalism-news-items {
    padding: 20px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    .journalism-news-items-icon {
      width: 160px;
      height: 100px;
      margin-right: 20px;
      overflow: hidden;
      float: left;

      a {
        display: block;
        img {
          width: 160px;
          height: 100px;
          transition: ease-in-out 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }

    .journalism-news-items-info {
      padding-left: 180px;
      .items-info-title {
        font-size: 16px;
        text-align: left;
        color: #555;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        .title-type {
          background-color: #00aef9;
          color: #fff;
          padding: 0px 6px;
          font-size: 12px;
          position: relative;
          margin-right: 10px;
          display: flex;
          align-items: center;
          height: 18px;
          i {
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: -4px;
            display: inline-block;
            width: 0;
            height: 0;
            vertical-align: middle;
            border-left: 4px solid #45bcf9;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
          }
        }
        a {
          transition: color 0.25s, background-color 0.25s;
        }
        h2 {
          font-size: 16px;
          a:hover {
            color: #00aef9;
          }
        }
      }

      .items-info-content {
        span {
          font-size: 12px;
          color: #646c75;
          text-align: left;
          line-height: 18px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis; // text-overflow css3的属性，当文本溢出时，显示省略号
          display: -webkit-box;
          -webkit-line-clamp: 2; // 设置两行文字溢出
          -webkit-box-orient: vertical;
        }
      }
    }

    .items-info-meta {
      color: #999;
      font-size: 12px;
      display: block;
      position: relative;
      margin: 0;
      text-align: left;
      span {
        i {
          padding-right: 5px;
        }

        padding-right: 20px;
      }
    }
    &:hover {
      box-shadow: 0 0 20px rgba(11, 215, 225, 0.35);
    }
    @include clearfix;
  }
}
</style>
