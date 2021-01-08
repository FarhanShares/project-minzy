<template>
  <div class="flex items-center">
    <div class="grid grid-cols-2">
      <img
        :src="image"
        :alt="imageAlt"
        class="cursor-pointer"
        @click="$emit('click', name, sku)"
      />

      <div class="grid grid-cols-2 text-xs text-gray-400">
        <div class="pl-2">
          <div class="mt-1">{{ name }}</div>
          <div class="mt-1">{{ model }}</div>
          <div class="mt-1">{{ sku }}</div>
          <div class="mt-1">type</div>
          <div class="mt-1">{{ country }}</div>
        </div>
        <div class="pl-2">
          <div class="mt-1">{{ orderingDate }}</div>
          <div class="mt-1">{{ deliveryDate }}</div>
          <div class="mt-1">{{ getDate }}</div>
          <div class="mt-1">{{ type }}</div>
          <div class="mt-1">{{ code }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    image: {
      default: require("@/assets/img/shop/product-placeholder.png")
    },
    imageAlt: {
      type: [String, Number],
      default: "image-alt-text"
    },
    name: {
      type: [String, Number],
      default: "order name"
    },
    model: {
      type: [String, Number],
      default: "x1"
    },
    sku: {
      type: [String, Number],
      default: "SKU001"
    },
    orderingDate: {
      type: [String, Number],
      default: "7 Jan"
    },
    deliveryDate: {
      type: [String, Number],
      default: "10 Jan"
    },
    type: {
      type: [String, Number],
      default: "dispatched"
    },
    typeColor: {
      type: [String, Number],
      default: "green"
    },
    country: {
      type: [String, Number],
      default: "USA"
    },
    code: {
      type: [String, Number],
      default: "R61618MJ768"
    },
    hasMessage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getDate() {
      return "3 days left";
    }
  }
};
</script>

<style lang="scss" scoped></style>
