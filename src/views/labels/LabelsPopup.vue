<template>
  <t-modal header="print labels" name="labels-popup" ref="popup">
    tracking codes

    <div v-if="shouldFetchDocument" class="px-1 py-2 my-1 border-yellow-400">
      <div class="text-blue-400">document is being generated..</div>

      <div class="text-purple-600 cursor-pointer" @click="fetchDocument">
        click to fetch again
        <span v-if="refetch">⟲</span>
      </div>
    </div>

    <section v-if="pkg && docs">
      message: {{ pkg.message }}
      <br />
      package id: {{ pkg.packageId }}
    </section>

    <template v-slot:footer>
      <div class="flex justify-between">
        <t-button type="button" @click="$refs.popup.hide()">
          cancel
        </t-button>
        <t-button type="button" @click="handlePrint()">
          print labels
        </t-button>
      </div>
    </template>
  </t-modal>
</template>

<script>
import emitter from "@/services/emitter.service";

import { shippingDocumentJson } from "@/services/data-model.service";

export default {
  name: "LabelsPopup",
  data() {
    return {
      pkg: {},
      docs: {
        code: null,
        message: null,
        link: null
      },
      refetch: false
    };
  },
  mounted() {
    emitter.on("labels-data", e => {
      // console.warn("s", e);
      this.pkg = e.pkg;
      this.docs = e.docs;
    });
  },
  computed: {
    shouldFetchDocument() {
      return this.docs && this.docs.code && this.docs.code !== 201;
    }
  },
  methods: {
    async fetchDocument() {
      this.refetch = true;
      await this.$http
        .post(
          "/documents",
          shippingDocumentJson(this.pkg.packageId, this.pkg.addressBarcodes[0])
        )
        .then(res => {
          console.log(res.data);
          this.docs = res.data;
          this.refetch = false;
        });
    },
    handlePrint() {
      if (this.docs.link) {
        window.open(this.docs.link);
      } else {
        alert("please fetch again");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>