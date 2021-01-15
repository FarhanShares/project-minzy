<template>
  <div id="orders">
    <app-topbar />
    <app-breadcrumb
      class="mt-4"
      @select-all="handleSelection()"
      @shop-switched="handleSwitchingShop"
      @page-changed="handleChangingPage"
    />

    <section class="flex justify-between">
      <div class="my-5 text-gray-600 font-xs">
        Selected Items: {{ getSelectedProducts }}
        <br />
        Is anything selected:
        {{ isAnythingSelected ? "Yes" : "No" }}
        <br />
        Total selected items:
        {{ getSelectionCount }}
      </div>

      <div>
        <t-button
          variant="warning"
          @click="handleGeneration('label')"
          v-if="isAnythingSelected"
          >Generate packing label</t-button
        >
      </div>
    </section>

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
              :name="item.title"
              :sku="item.ea_sku"
              :country="item.ea_country"
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
        <div
          v-for="(shopId, shopIndex) in shops"
          :key="`shop-id-${shopId}-${shopIndex}`"
        >
          <div class="select-all-product" @click="handleSelection(shopId)">
            select-all from shop {{ shopId }}
          </div>
          <template v-for="(item, index) in getProducts(shopId)">
            <product-item
              class="my-3"
              :key="index"
              :id="item.id"
              :shop="shopId"
              :name="item.ea_title"
              :sku="item.ea_sku"
              :country="item.ea_country"
              @click="handleClickingProduct(item.id, shopId)"
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

    <labels-popup />
  </div>
</template>

<script>
import AppTopbar from "@/components/topbar/AppTopbar.vue";
import AppBreadcrumb from "@/components/breadcrumb/AppBreadcrumb.vue";
import ProductItem from "@/components/shop/ProductItem.vue";
import AppFooter from "@/components/footer/AppFooter";

import PageEurope from "@/views/PageEurope";
import PageWorld from "@/views/PageWorld";

import OuConfig from "@/config/ou.config";

import emitter from "@/services/emitter.service";
import LabelsPopup from "./labels/LabelsPopup.vue";

import {
  createPackageJson,
  shippingDocumentJson
} from "@/services/data-model.service";

export default {
  name: "Home",

  components: {
    AppTopbar,
    AppBreadcrumb,
    ProductItem,
    AppFooter,
    PageEurope,
    PageWorld,
    LabelsPopup
  },

  data() {
    return {
      isLoading: false,
      isLoaded: false,
      name: "Farhan Israq",
      currentShopId: "all",
      currentPageId: "labels",
      shops: ["ou", "gow", "dow", "aows"]
    };
  },

  computed: {
    getSelectedProducts() {
      return this.$store.getters["product/getSelectedProducts"]("all");
    },
    getSelectionCount() {
      return this.$store.getters["product/getSelectionCount"];
    },
    isAnythingSelected() {
      return this.$store.getters["product/getSelectionCount"] > 0;
    }
  },

  created() {
    this.$Progress.start();

    // Get products from shop ou
    this.$ou
      .get(OuConfig.api.orders.index)
      .then(res => {
        this.$store.dispatch("product/addProductsToShop", {
          shop: "ou",
          products: res.data,
          reset: true
        });
        console.warn("ou=>", res.data);
      })
      .catch(err => {
        console.warn(err);
      });

    // Get products from shop gow
    this.$gow
      .get(OuConfig.api.orders.index)
      .then(res => {
        this.$store.dispatch("product/addProductsToShop", {
          shop: "gow",
          products: res.data,
          reset: true
        });
        console.warn("gow=>", res.data);
      })
      .catch(err => {
        console.warn(err);
      });

    this.$Progress.finish();
  },

  mounted() {},

  methods: {
    handleClickingProduct(item, shop) {
      this.$store.dispatch("product/selectAProduct", { id: item, shop });
    },
    handleSelection(from = "all") {
      this.$store.dispatch("product/selectAllProducts", { shop: from });
    },
    getProducts(shopName) {
      return this.$store.state["product"].products[shopName];
    },
    handleSwitchingShop(e) {
      this.currentShopId = e;
    },
    handleChangingPage(e) {
      this.currentPageId = e;
    },
    async handleGeneration(type) {
      if (type === "label") {
        let package_create = createPackageJson();
        console.warn(package_create);

        this.$Progress.start();

        await this.$http
          .post("/packages", package_create)
          .then(async res => {
            // let pkg_docs = res.data.documents;
            let popup = {};

            let pkg = res.data;
            let pkg_id = res.data.packageId;
            let pkg_barcodes = res.data.addressBarcodes;

            await this.$http
              .post("/documents", shippingDocumentJson(pkg_id, pkg_barcodes[0]))
              .then(res => {
                popup = { pkg: pkg, docs: res.data };
                emitter.emit("labels-data", popup);

                this.$modal.show("labels-popup");
              });

            this.$Progress.finish();
          })
          .then(err => {
            if (err) {
              console.warn("pkg_er", err);

              this.$Progress.fail();

              alert("failed to create package");
            }
          })
          .finally(() => {
            this.$Progress.finish();
          });
      }
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