<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <img src="../assets/img/logo.png" class="app-logo" />
      </div>
      <div class="flex items-center justify-between">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTopbar"
};
</script>

<style lang="scss" scoped>
.app-logo {
  @apply h-12;
}
</style>