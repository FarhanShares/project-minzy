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
import emitter from "@/services/emitter.service";

export default {
  name: "LabelsPopup",
  mounted() {
    emitter.on("labels-data", e => {
      console.warn(e);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>