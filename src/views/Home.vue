<template>
  <div class="home">
    <app-topbar />
    <app-breadcrumb
      class="mt-4"
      @select-all="handleSelection()"
      @shop-switched="handleSwitchingShop"
      @page-changed="handleChangingPage"
    />

    <div class="my-5 text-gray-600 font-xs">
      Selected Items: {{ getSelectedProducts }}
    </div>

    <template v-if="currentPageId === 'labels'">
      <section v-if="currentShopId !== 'all'">
        <div class="select-all-product" @click="handleSelection(currentShopId)">
          select-all from shop {{ currentShopId }}
        </div>

        <div class="grid grid-cols-1 mt-6 lg:grid-cols-4 gap-x-8">
          <template v-for="(item, index) in getProducts(currentShopId)">
            <product-item
              class="my-3"
              :id="item.id"
              :shop="currentShopId"
              :name="item.name"
              :sku="item.sku"
              :key="index"
              @click="handleClickingProduct(item.id, currentShopId)"
            />
          </template>
        </div>
      </section>

      <section
        v-if="currentShopId === 'all'"
        class="grid grid-cols-1 mt-6 lg:grid-cols-4 gap-x-8"
      >
        <div>
          <div class="select-all-product" @click="handleSelection('ou')">
            select-all from shop ou
          </div>
          <template v-for="(item, index) in getProducts('ou')">
            <product-item
              class="my-3"
              :id="item.id"
              :shop="`ou`"
              :name="item.name"
              :sku="item.sku"
              :key="index"
              @click="handleClickingProduct(item.id, 'ou')"
            />
          </template>
        </div>

        <div>
          <div class="select-all-product" @click="handleSelection('gow')">
            select-all from shop gow
          </div>

          <template v-for="(item, index) in getProducts('gow')">
            <product-item
              :id="item.id"
              :shop="`gow`"
              :name="item.name"
              :sku="item.sku"
              :key="index"
              class="my-3"
              @click="handleClickingProduct(item.id, 'gow')"
            />
          </template>
        </div>

        <div>
          <div class="select-all-product" @click="handleSelection('dow')">
            select-all from shop dow
          </div>

          <template v-for="(item, index) in getProducts('dow')">
            <product-item
              :id="item.id"
              :shop="`dow`"
              :name="item.name"
              :sku="item.sku"
              :key="index"
              class="my-3"
              @click="handleClickingProduct(item.id, 'dow')"
            />
          </template>
        </div>

        <div>
          <div class="select-all-product" @click="handleSelection('aows')">
            select-all from shop aows
          </div>
          <template v-for="(item, index) in getProducts('aows')">
            <product-item
              :id="item.id"
              :shop="`aows`"
              :name="item.name"
              :sku="item.sku"
              :key="index"
              class="my-3"
              @click="handleClickingProduct(item.id, 'aows')"
            />
          </template>
        </div>
      </section>
    </template>

    <template v-if="currentPageId === 'europe'">
      <page-europe />
    </template>

    <template v-if="currentPageId === 'world'">
      <page-world />
    </template>

    <app-footer />
  </div>
</template>

<script>
import AppTopbar from "@/components/topbar/AppTopbar.vue";
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb.vue";
import ProductItem from "@/components/shop/ProductItem.vue";
import AppFooter from "@/components/footer/AppFooter";

import PageEurope from "@/views/PageEurope";
import PageWorld from "@/views/PageWorld";

export default {
  name: "Home",
  components: {
    AppTopbar,
    AppBreadcrumb,
    ProductItem,
    AppFooter,
    PageEurope,
    PageWorld
  },
  data() {
    return {
      name: "Farhan Israq",
      currentShopId: "all",
      currentPageId: "labels"
    };
  },
  computed: {
    getSelectedProducts() {
      return this.$store.getters.getSelectedProducts("all");
    }
  },
  methods: {
    handleClickingProduct(item, shop) {
      this.$store.dispatch("selectAProduct", { id: item, shop });
    },
    handleSelection(from = "all") {
      this.$store.dispatch("selectAllProducts", { shop: from });
    },
    getProducts(shopName) {
      return this.$store.state.products[shopName];
    },
    handleSwitchingShop(e) {
      this.currentShopId = e;
    },
    handleChangingPage(e) {
      this.currentPageId = e;
    }
  }
};
AppTopbar;
</script>

<style lang="scss" scoped>
.select-all-product {
  @apply mt-8 mb-2 text-sm font-medium cursor-pointer;
}
</style>