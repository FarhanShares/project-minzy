<template>
  <div class="home">
    <app-topbar />
    <app-breadcrumb class="mt-4" />

    <section class="grid grid-cols-1 mt-6 lg:grid-cols-4 gap-x-10">
      <div>
        <div class="select-all-product">select-all from shop ou</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-1" />
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop gow</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-1" />
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop dow</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-1" />
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop aows</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-1" />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import AppTopbar from "@/components/topbar/AppTopbar.vue";
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb.vue";
import ProductItem from "@/components/shop/ProductItem.vue";
export default {
  name: "Home",
  components: {
    AppTopbar,
    AppBreadcrumb,
    ProductItem
  }
};
AppTopbar;
</script>

<style lang="scss" scoped>
.select-all-product {
  @apply mt-8 mb-2 text-sm font-medium;
}
</style>