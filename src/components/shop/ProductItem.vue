<template>
  <section class="flex items-center">
    <div
      class="w-2 mt-px mr-1 "
      :class="isSelected ? 'bg-red-400' : 'bg-white'"
      style="height: 110px"
    />
    <div class="grid grid-cols-2">
      <div class="image-container">
        <img
          :src="image"
          :alt="imageAlt"
          class="cursor-pointer"
          @click="$emit('click', id)"
        />
        <div class="hover-container" v-if="readMore">
          read more
        </div>
      </div>

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
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductItem",
  props: {
    id: {
      required: true
    },
    shop: {
      required: true
    },
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
    readMore: {
      type: [String, Number],
      required: false
    }
  },
  computed: {
    getDate() {
      return "3 days left";
    },
    ...mapState({
      isSelected(state) {
        // console.warn(
        //   this.id,
        //   "==>",
        //   state.selected[this.shop] &&
        //     state.selected[this.shop].includes(this.id)
        // );
        return (
          state.selected[this.shop] &&
          state.selected[this.shop].includes(this.id)
        );
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  height: 110px;
  width: 200px;
  position: relative;

  & .hover-container {
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    width: 180px;
    padding: 10px 3px;
    background-color: #ffc300;
    &:hover {
      visibility: visible;
    }
  }

  &:hover .hover-container {
    visibility: visible;
  }
}
</style>
