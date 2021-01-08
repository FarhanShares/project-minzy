<template>
  <div class="relative pt-2 mx-auto text-gray-600">
    <input
      type="search"
      name="q"
      id="topbar-search"
      class="w-64 h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 focus:outline-none"
    />
    <button
      type="submit"
      class="absolute top-0 right-0 mt-4 mr-3 text-sm font-medium text-gray-600"
    >
      search
    </button>
  </div>
</template>

<script>
export default {
  name: "TopbarSearch"
};
</script>

<style lang="scss" scoped>
</style>