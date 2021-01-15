<template>
  <section>
    <div v-if="active" class="w-full h-full bg-white min-h-3/4 vld-parent">
      Loading...
      <loading :active.sync="active" :is-full-page="false" />
    </div>
    <div v-else>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "SpinnerSkeleton",
  props: {
    active: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>