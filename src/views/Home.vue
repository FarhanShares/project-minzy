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

        <template v-for="(item, index) in shop_gow">
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
              @click="handleClickingProduct(item, index, 'gow')"
            />
          </div>
        </template>
      </div>

      <div>
        <div class="select-all-product">select-all from shop dow</div>

        <template v-for="(item, index) in shop_dow">
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
              @click="handleClickingProduct(item, index, 'dow')"
            />
          </div>
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
        { name: "order-01", sku: "SKU001", selected: false },
        { name: "order-02", sku: "SKU002", selected: false },
        { name: "order-03", sku: "SKU003", selected: false },
        { name: "order-04", sku: "SKU004", selected: false },
        { name: "order-05", sku: "SKU005", selected: false },
        { name: "order-06", sku: "SKU006", selected: false },
        { name: "order-07", sku: "SKU007", selected: false }
      ],
      shop_gow: [
        { name: "name-01", sku: "SKU0001", selected: false },
        { name: "name-02", sku: "SKU0002", selected: false },
        { name: "name-03", sku: "SKU0003", selected: false },
        { name: "name-04", sku: "SKU0004", selected: false },
        { name: "name-05", sku: "SKU0005", selected: false },
        { name: "name-06", sku: "SKU0006", selected: false },
        { name: "name-07", sku: "SKU0007", selected: false }
      ],
      shop_dow: [
        { name: "dow-01", sku: "SKU0031", selected: false },
        { name: "dow-02", sku: "SKU0032", selected: false },
        { name: "dow-03", sku: "SKU0033", selected: false },
        { name: "dow-04", sku: "SKU0034", selected: false },
        { name: "dow-05", sku: "SKU0035", selected: false },
        { name: "dow-06", sku: "SKU0036", selected: false },
        { name: "dow-07", sku: "SKU0037", selected: false }
      ],
      shop_aows: [
        { name: "aows-01", sku: "SKU0011", selected: false },
        { name: "aows-02", sku: "SKU0012", selected: false },
        { name: "aows-03", sku: "SKU0013", selected: false },
        { name: "aows-04", sku: "SKU0014", selected: false },
        { name: "aows-05", sku: "SKU0015", selected: false },
        { name: "aows-06", sku: "SKU0016", selected: false },
        { name: "aows-07", sku: "SKU0017", selected: false }
      ]
    };
  },
  methods: {
    handleClickingProduct(item, index, shop) {
      if (shop === "ou") {
        this.shop_ou[index].selected = !this.shop_ou[index].selected;
      }
      if (shop === "gow") {
        this.shop_gow[index].selected = !this.shop_gow[index].selected;
      }
      if (shop === "dow") {
        this.shop_dow[index].selected = !this.shop_dow[index].selected;
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