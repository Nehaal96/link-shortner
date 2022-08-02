<template >
  <div>
    <nav class="navbar navbar-expand-lg navbar-light px-3 py-3">
      <a class="navbar-brand title" href="#">Shortly</a>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav mr-auto navbar-container justify-content-between">
          <b-navbar-nav>
            <li class="nav-item active">
              <a class="nav-link navbar-link" href="#"
                >Features <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Resources</a>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Login</a>
            </li>
            <li class="nav-item px-3 custom">
              <a class="nav-link navbar-link button" href="#">Sign up</a>
            </li>
          </b-navbar-nav>
        </ul>
      </b-collapse>
    </nav>
  </div>
</template>
<script>
import "../stylesheets/home.css";

export default {
  name: "navigation-bar",
};
</script>
