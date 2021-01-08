<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center mt-5">
      <breadcrumb-item title="all" badge="89" :muted="false" />
      <breadcrumb-separator />
      <breadcrumb-item title="shop ou" badge="89" :muted="true" />
      <breadcrumb-separator />
      <breadcrumb-item title="shop gow" badge="" :muted="true" />
      <breadcrumb-separator />
      <breadcrumb-item title="shop dow" badge="76" :muted="true" />
      <breadcrumb-separator />
      <breadcrumb-item title="shop aows" badge="" :muted="true" />
    </div>
    <div class="flex items-center mt-5">
      <breadcrumb-item title="print labels" :underlined="false" />
      <breadcrumb-separator />
      <breadcrumb-item title="packing europ" :underlined="true" />
      <breadcrumb-separator />
      <breadcrumb-item title="packing world" :underlined="false" />
    </div>
  </div>
</template>

<script>
import BreadcrumbItem from "./BreadcrumbItem.vue";
import BreadcrumbSeparator from "./BreadcrumbSeparator.vue";
export default {
  components: { BreadcrumbItem, BreadcrumbSeparator },
  name: "AppBreadcrumb"
};
</script>

<style lang="scss" scoped>
</style>