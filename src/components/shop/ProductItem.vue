<template>
  <div class="flex items-center">
    <div class="grid grid-cols-2">
      <img :src="image" :alt="imageAlt" />
      <div>
        sdf
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
      default: "green"
    },
    code: {
      type: [String, Number],
      default: "green"
    },
    hasMessage: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
