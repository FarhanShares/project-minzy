<template>
  <div class="home">
    <app-topbar />
    <app-breadcrumb />
  </div>
</template>

<script>
import AppTopbar from "@/components/topbar/AppTopbar.vue";
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb.vue";
export default {
  name: "Home",
  components: {
    AppTopbar,
    AppBreadcrumb
  }
};
AppTopbar;
</script>
