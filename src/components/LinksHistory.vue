<template lang="">
    <div class="column link-generator-description">
        <div class="d-flex flex-column-reverse pb-4">
          <div
            v-for="(link, index) in getShortenedLinks"
            :key="`${link.code}_${index}`"
          >
            <div class="d-flex link-container flex-container">
              <div class="link-information">
                <div class="link-decoration">
                  {{ link.short_link }}
                </div>
              </div>
              <button
                class="button list-button"
                @click="copyFromList(link.short_link)"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <h2 class="secondary-title">Advanced Statistics</h2>
          <p class="secondary-description">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
</template>
<script>
import { mapGetters } from "vuex";
import { showSnackBar } from "../utils/helper";

import "../stylesheets/home.css";

export default {
  name: "links-history",
  methods: {
    copyFromList(data) {
      navigator.clipboard.writeText(data);
      showSnackBar("Copied!");
    },
  },
  computed: {
    ...mapGetters(["getShortenedLinks"]),
  },
};
</script>