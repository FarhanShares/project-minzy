<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center mt-5">
      <breadcrumb-item
        title="all"
        badge="89"
        :muted="isMuted('all')"
        @click="switchShop('all')"
      />

      <breadcrumb-separator />
      <breadcrumb-item
        title="shop ou"
        badge="89"
        :muted="isMuted('ou')"
        @click="switchShop('ou')"
      />

      <breadcrumb-separator />
      <breadcrumb-item
        title="shop gow"
        badge=""
        :muted="isMuted('gow')"
        @click="switchShop('gow')"
      />

      <breadcrumb-separator />
      <breadcrumb-item
        title="shop dow"
        badge="76"
        :muted="isMuted('dow')"
        @click="switchShop('dow')"
      />

      <breadcrumb-separator />
      <breadcrumb-item
        title="shop aows"
        badge=""
        :muted="isMuted('aows')"
        @click="switchShop('aows')"
      />
    </div>

    <div class="flex items-center">
      <div class="flex items-center mt-5">
        <breadcrumb-item
          title="print labels"
          :underlined="isUnderlined('labels')"
          @click="changePage('labels')"
        />

        <breadcrumb-separator />
        <breadcrumb-item
          title="packing europe"
          :underlined="isUnderlined('europe')"
          @click="changePage('europe')"
        />

        <breadcrumb-separator />
        <breadcrumb-item
          title="packing world"
          :underlined="isUnderlined('world')"
          @click="changePage('world')"
        />
      </div>
      <div
        class="mt-8 ml-12 text-sm font-medium cursor-pointer"
        @click="$emit('select-all')"
      >
        select all
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbItem from "./BreadcrumbItem.vue";
import BreadcrumbSeparator from "./BreadcrumbSeparator.vue";
export default {
  components: { BreadcrumbItem, BreadcrumbSeparator },
  name: "AppBreadcrumb",
  data() {
    return {
      currentShopId: "all",
      currentPageId: "labels"
    };
  },
  methods: {
    isMuted(shopId) {
      return this.currentShopId !== shopId;
    },
    switchShop(shopId) {
      this.currentShopId = shopId;
      this.$emit("shop-switched", shopId);
    },
    isUnderlined(pageId) {
      return this.currentPageId === pageId;
    },
    changePage(pageId) {
      this.currentPageId = pageId;
      this.$emit("page-changed", pageId);
    }
  }
};
</script>

<style lang="scss" scoped></style>
