<template>
  <div class="home">
    <app-topbar />
    <app-breadcrumb class="mt-4" />

    <section class="grid grid-cols-1 mt-6 lg:grid-cols-4 gap-x-8">
      <div>
        <div class="select-all-product">select-all from shop ou</div>

        <template v-for="(item, index) in shop_ou">
          <div class="flex items-center" :key="index">
            <div
              v-if="item.selected"
              class="w-2 mt-px mr-1 bg-red-500 "
              style="height: 106px"
            />
            <div
              v-if="!item.selected"
              class="w-2 mt-px mr-1 bg-white "
              style="height: 106px"
            />
            <product-item
              :name="item.name"
              :sku="item.sku"
              class="my-3"
              @click="handleClickingProduct(item, index, 'ou')"
            />
          </div>
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop gow</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-3" />
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop dow</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-3" />
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop aows</div>

        <template v-for="item in 10">
          <product-item :key="item" class="my-3" />
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
  },
  data() {
    return {
      shop_ou: [
        { name: "order-01", sku: "SKU001", selected: true },
        { name: "order-02", sku: "SKU002", selected: false },
        { name: "order-03", sku: "SKU003", selected: false },
        { name: "order-04", sku: "SKU004", selected: false },
        { name: "order-05", sku: "SKU005", selected: false },
        { name: "order-06", sku: "SKU006", selected: false },
        { name: "order-07", sku: "SKU007", selected: false }
      ]
    };
  },
  methods: {
    handleClickingProduct(item, index, shop) {
      if (shop === "ou") {
        this.shop_ou[index].selected = !this.shop_ou[index].selected;
      }
    }
  }
};
AppTopbar;
</script>

<style lang="scss" scoped>
.select-all-product {
  @apply mt-8 mb-2 text-sm font-medium;
}
</style>