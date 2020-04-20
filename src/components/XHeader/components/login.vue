<template>
  <div class="modal " :class="{ 'show-modal': syncIsShow }">
    <div class="modal-content login-box-content">
      <div class="login-box-top">
        <a class="close-button" @click="hanldeClose">×</a>
        <div class="login-logo">
          <span class="logo-text-zh">夏艺洹博客</span>
        </div>
        <div class="form">
          <div class="login-box-in">
            <div class="login-title">
              <span>注册</span>
            </div>
          </div>
          <div class="login-form-item">
            <input
              type="text"
              v-model="user_name"
              tabindex="2"
              spellcheck="false"
              autocomplete="off"
              class=""
            />
            <span><b>用户名</b></span>
            <p class="login-box-des">
              仅支持字母和数字的组合，最少6位字符
            </p>
          </div>
          <div class="login-form-item">
            <input
              type="password"
              v-model="password"
              tabindex="3"
              spellcheck="false"
              autocomplete="new-password"
              class=""
            />
            <span><b>密码</b></span>
            <p class="login-box-des" style="">最少6位字符</p>
          </div>
          <div class="login-form-item">
            <input
              type="password"
              v-model="c_password"
              tabindex="4"
              spellcheck="false"
              autocomplete="new-password"
              class=""
            />
            <span><b>确认密码</b></span>
          </div>

          <div class="login-bottom">
            <button class="">快速注册</button>
          </div>

          <div class="site-terms">
            <span>
              注册登录即表示同意
              <a>用户协议</a>、
              <a>隐私政策</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, PropSync } from 'vue-property-decorator';
@Component({ name: 'Login' })
export default class Login extends Vue {
  @PropSync('isShow', { type: Boolean, default: false }) public syncIsShow!: boolean;
  @Emit('close')
  public close(data: { isShow: boolean }) {
    return data;
  }
  private user_name = '';
  private password = '';
  private c_password = '';

  private hanldeClose() {
    this.close({ isShow: true });
  }
}
</script>
