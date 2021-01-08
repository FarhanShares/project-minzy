<template>
  <div @click="$emit('click')" class="flex flex-col mx-2">
    <div class="h-4 text-sm font-normal text-right text-gray-400 lining-nums ">
      {{ top }}
    </div>

    <div class="text-base font-medium text-gray-500">{{ title }}</div>

    <div
      class="h-4 -mt-1 text-xs font-normal text-right text-gray-400 lining-nums "
    >
      {{ bottom }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TopbarNavLinkItem",
  props: ["title", "top", "bottom"]
};
</script>

<style lang="scss" scoped></style>