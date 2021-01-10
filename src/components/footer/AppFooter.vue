<template>
  <div
    class="flex items-center justify-center max-w-5xl mx-auto mt-10 mb-5 space-x-16 footer-text"
  >
    <div class="flex items-center">
      <div>update folder</div>
      <div class="ml-3 footer-badge">3</div>
      <div>
        <img
          src="@/assets/icon/icon-1.png"
          alt="icon-1"
          class="w-10 h-12 ml-2"
        />
      </div>
    </div>

    <div>
      |
    </div>

    <div class="flex items-center">
      <div>sync online</div>
      <img src="@/assets/icon/icon-2.png" alt="icon-2" class="w-12 h-12 ml-2" />
    </div>

    <div>
      |
    </div>

    <div class="flex items-center">
      <div>fix order</div>
      <input
        type="search"
        name=""
        id=""
        placeholder="search order no"
        class="px-2 py-1 ml-2 text-sm placeholder-gray-300 border-b border-gray-300 outline-none focus:outline-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style lang="scss" scoped>
.footer-text {
  @apply text-gray-400 text-xl font-medium;
}
.footer-badge {
  @apply font-normal bg-red-400 w-4 h-4 rounded-full text-white text-sm flex items-center justify-center;
}
</style>