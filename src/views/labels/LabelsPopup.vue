<template>
  <t-modal header="print labels" name="labels-popup" ref="popup">
    tracking codes
    <br />
    package name:
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
  data() {
    return {
      pkg: null,
      docs: null
    };
  },
  mounted() {
    emitter.on("labels-data", e => {
      console.warn(e);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>