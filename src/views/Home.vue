<template>
  <div>
    <navigation-bar></navigation-bar>
    <hero-view></hero-view>
    <div class="home-detailed-view">
      <link-generator></link-generator>
      <links-history></links-history>
    </div>
    <div id="snackbar" type="text"></div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import { showSnackBar } from "../utils/helper";

import "../stylesheets/home.css";
import "../stylesheets/snackbar.css";

import NavigationBar from "../components/NavigationBar.vue";
import HeroView from "../components/HeroView.vue";
import LinkGenerator from "../components/LinkGenerator.vue";
import LinksHistory from "../components/LinksHistory.vue";

export default {
  name: "home-page",
  components: {
    NavigationBar,
    HeroView,
    LinkGenerator,
    LinksHistory,
  },
  mounted() {
    this.initialiseService();
  },
  methods: {
    ...mapActions(["initialiseService", "clearInput"]),
    copyFromList(data) {
      navigator.clipboard.writeText(data);
      showSnackBar("Copied!");
    },
  },
  computed: {
    ...mapGetters(["getShortenedLinks"]),
  },
  destroyed() {
    this.clearInput();
  },
};
</script>