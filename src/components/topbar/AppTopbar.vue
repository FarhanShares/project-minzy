<template>
  <div>
    <div class="flex items-center justify-between mt-10">
      <div>
        <img src="@/assets/img/logo.png" class="app-logo" />
      </div>
      <div class="flex items-center justify-between">
        <topbar-nav-links />
        <topbar-search class="ml-24" />
      </div>
    </div>
  </div>
</template>

<script>
import TopbarNavLinks from "./TopbarNavLinks.vue";
import TopbarSearch from "./TopbarSearch.vue";
export default {
  name: "AppTopbar",
  components: { TopbarNavLinks, TopbarSearch }
};
</script>

<style lang="scss" scoped>
.app-logo {
  @apply h-12;
}
</style>