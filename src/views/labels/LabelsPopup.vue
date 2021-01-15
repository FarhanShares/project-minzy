<template>
  <t-modal header="print labels" name="labels-popup" ref="popup">
    get tracking codes
    <template v-slot:footer>
      <div class="flex justify-between">
        <t-button type="button" @click="$refs.popup.hide()">
          cancel
        </t-button>
        <t-button type="button">
          print labels
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