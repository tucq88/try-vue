<template>
  <div id="nav">
    <router-link to="/login">Login</router-link>|
    <router-link to="/about">Requiring Logged In</router-link>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {
  }
</script>
