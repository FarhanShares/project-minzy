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
      name: "Farhan Israq"
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
    getProducts(shopName) {
      return this.$store.state.products[shopName];
    }
  },
  mounted() {
    // console.warn("ou", this.getProducts("ou"));
  }
};
AppTopbar;
</script>

<style lang="scss" scoped>
.select-all-product {
  @apply mt-8 mb-2 text-sm font-medium cursor-pointer;
}
</style>