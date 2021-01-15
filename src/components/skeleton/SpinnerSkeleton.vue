<template>
  <div class="w-full h-full bg-white ">
    <loading :active.sync="active" :is-full-page="false" />
  </div>
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