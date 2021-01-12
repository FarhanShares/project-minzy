<template>
  <t-modal header="Title of the modal" name="labels-popup">
    Content of the modal.
    <template v-slot:footer>
      <div class="flex justify-between">
        <t-button type="button">
          Cancel
        </t-button>
        <t-button type="button">
          Ok
        </t-button>
      </div>
    </template>
  </t-modal>
</template>

<script>
export default {
  name: "LabelsPopup"
};
</script>

<style lang="scss" scoped>
</style>