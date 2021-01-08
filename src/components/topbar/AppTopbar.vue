<template>
  <div>
    <div class="flex items-center justify-between mt-10">
      <div>
        <img src="@/assets/img/logo.png" class="app-logo" />
      </div>
      <div class="flex items-center justify-between">
        <topbar-nav-links />
        <div>2</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopbarNavLinks from "./TopbarNavLinks.vue";
export default {
  name: "AppTopbar",
  components: { TopbarNavLinks }
};
</script>

<style lang="scss" scoped>
.app-logo {
  @apply h-12;
}
</style>