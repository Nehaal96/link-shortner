<template >
  <div class="row link-generator">
    <div class="flex-container">
      <input
        type="text"
        class="input link-input"
        placeholder="Shorten a link here..."
        v-model="url"
      />
      <button
        class="button"
        @click="linkAvailable ? copyToClipboard() : shortenUrl()"
      >
        <div class="spinner-border" role="status" v-if="getLoaderStatus">
          <span class="sr-only">Loading...</span>
        </div>
        <div v-else>
          {{ linkAvailable ? "Copy" : "Shorten" }}
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import { showSnackBar } from "../utils/helper";

import "../stylesheets/home.css";

export default {
  name: "link-generator",
  data() {
    return {
      url: "",
    };
  },
  watch: {
    getInputData(value) {
      this.url = value;
    },
  },
  methods: {
    ...mapActions(["getFormattedUrl", "clearInput"]),
    shortenUrl() {
      console.log(this.url);
      if (this.url) {
        this.getFormattedUrl(this.url);
      } else {
        this.showSnackBar("Please enter a link to shorten");
      }
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.getInputData);
      showSnackBar("Copied!");
      this.clearInput();
    },
  },
  computed: {
    ...mapGetters(["getLoaderStatus", "getInputData", "linkAvailable"]),
  },
};
</script>
<style lang="">
</style>