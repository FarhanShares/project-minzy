<template>
  <div class="home">
    <app-topbar />
    <app-breadcrumb class="mt-4" @select-all="selectallp(true)" />

    {{ getSelectedProducts }}

    <section class="grid grid-cols-1 mt-6 lg:grid-cols-4 gap-x-8">
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
      ],
      selected: []
    };
  },
  computed: {
    getSelectedProducts() {
      return this.$store.getters.getSelectedProducts;
    }
  },
  methods: {
    handleClickingProduct(item, shop) {
      this.$store.dispatch("selectAProduct", { id: item, shop });
    },
    handleSelection(from = "ou") {
      let selectAllOu = () => {
        this.shop_ou.forEach(val => {
          val.selected = !val.selected;
        });
      };
      let selectAllGow = () => {
        this.shop_gow.forEach(val => {
          val.selected = !val.selected;
        });
      };
      let selectAllDow = () => {
        this.shop_dow.forEach(val => {
          val.selected = !val.selected;
        });
      };
      let selectAllAows = () => {
        this.shop_aows.forEach(val => {
          val.selected = !val.selected;
        });
      };
      if (from === "ou") {
        selectAllOu();
      }
      if (from === "gow") {
        selectAllGow();
      }
      if (from === "dow") {
        selectAllDow();
      }
      if (from === "aows") {
        selectAllAows();
      }
      if (from === "all") {
        selectAllOu();
        selectAllGow();
        selectAllDow();
        selectAllAows();
      }
    },
    selectallp(value) {
      var selected = [];
      if (value) {
        this.shop_ou.forEach(function(product) {
          selected.push(product.sku);
        });
      }
      console.warn(selected);
      this.selected = selected;
    },
    addSelection(item) {
      this.selected.push(item.sku);
    },
    getProducts(shopName) {
      return this.$store.state.products[shopName];
    }
  },
  mounted() {
    console.warn("ou", this.getProducts("ou"));
  }
};
AppTopbar;
</script>

<style lang="scss" scoped>
.select-all-product {
  @apply mt-8 mb-2 text-sm font-medium cursor-pointer;
}
</style>