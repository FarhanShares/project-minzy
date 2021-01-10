<template>
  <div @click="$emit('click', title)" class="flex flex-col mx-2">
    <div class="self-end">
      <div
        class="flex items-center justify-center w-4 h-4 -mr-1 font-medium text-center text-gray-800 rounded-full text-9px "
        :class="getBadgeClass"
      >
        {{ badge }}
      </div>
    </div>

    <div
      class="text-xl font-medium tracking-wide border-b-4 cursor-pointer"
      :class="getTitleClass"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TopbarNavLinkItem",
  props: ["title", "badge", "underlined", "muted"],
  computed: {
    getTitleClass() {
      let underlined = this.underlined
        ? "border-yellow-300"
        : "border-transparent";
      let muted = this.muted ? "text-gray-300" : "text-gray-600";

      return `${underlined} ${muted}`;
    },
    getBadgeClass() {
      return this.badge ? "bg-yellow-200" : "bg-transparent";
    }
  }
};
</script>

<style lang="scss" scoped>
.text-9px {
  font-size: 9px;
}
</style>
