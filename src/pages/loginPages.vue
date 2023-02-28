<template>
  <div class="login_panel">
    <input type="text" placeholder="Sign In" class="login_input">
    <span class="login_sp"><el-icon color="white"><ArrowRightBold /></el-icon></span>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login_panel {
    display: flex;
    justify-content: center;
    align-items: center;
    background:#9b59b6;
    padding: 10px;
    border-radius: 20px;
    .login_input{
      outline: none;
      height: 25px;
      // background:#9b59b6;
      // border: 0;
      color:#fff;
    }
    .login_sp {

    }
}
</style>
