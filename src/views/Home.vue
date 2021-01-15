<template>
  <div class="home">
    <app-topbar />
    <!-- <app-breadcrumb
      class="mt-4"
      @select-all="handleSelection()"
      @shop-switched="handleSwitchingShop"
      @page-changed="handleChangingPage"
    /> -->

    <div class="flex items-center justify-center h-96">
      <router-link :to="{ name: 'Orders' }">
        Visit Orders Page
      </router-link>
    </div>

    <app-footer />
  </div>
</template>

<script>
import AppTopbar from "@/components/topbar/AppTopbar.vue";
import AppFooter from "@/components/footer/AppFooter.vue";
// import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb.vue";

export default {
  name: "Home",

  components: {
    AppTopbar,
    AppFooter
    // AppBreadcrumb
  },

  data() {
    return {};
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handleSelection(from = "all") {
      this.$store.dispatch("order/selectAllProducts", { shop: from });
    },
    getProducts(shopName) {
      return this.$store.state["order"].products[shopName];
    },
    handleSwitchingShop(e) {
      this.currentShopId = e;
    },
    handleChangingPage(e) {
      this.currentPageId = e;
    }
  }
};
</script>

<style lang="scss" scoped>
.select-all-product {
  @apply mt-8 mb-2 text-sm font-medium cursor-pointer;
}
</style>