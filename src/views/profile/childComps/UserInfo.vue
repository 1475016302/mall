<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <div class="privateImage-svg left"> <img src="~assets/img/profile/user.svg" alt="" /></div>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <div class="icon-mobile"><img src="~assets/img/profile/phone.svg" alt="" /></div>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <div class="arrow-svg right">
        <img src="~assets/img/profile/right icon.svg" alt="" />
      </div>

    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
#user-info {
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
}

#user-info .privateImage-svg img {
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 35px;
}

.left {
  float: left;
}
.right {
  float: right;
}

#user-info .arrow-svg img {
  width: 13px;
  height: 25px;
  margin-top: 18px;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}
#user-info .icon-mobile img {
  width: 28px;
  height: 25px;
  margin-left: -10px;
}
#user-info .login-info .phone {
  position: relative;

  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}

#user-info .login-info .phone .icon-mobile {
  position: absolute;
  width: 12px;
  height: 18px;
  left: -15px;
  top: 0px;
}
</style>
