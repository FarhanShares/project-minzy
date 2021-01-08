<template>
  <div class="flex items-center">
    <topbar-nav-link-item title="new orders" /> |
    <topbar-nav-link-item title="in production" top="21(14)" /> |
    <topbar-nav-link-item title="dispached" bottom="21993" />
  </div>
</template>

<script>
import TopbarNavLinkItem from "./TopbarNavLinkItem.vue";
export default {
  name: "TopbarNavLinks",
  components: {
    TopbarNavLinkItem
  }
};
</script>

<style lang="scss" scoped></style>