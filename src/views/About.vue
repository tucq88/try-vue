<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="logout()">Logout</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { AuthService } from '@/services/auth';

  @Component({})
  export default class AboutPage extends Vue {
    svc = new AuthService();

    logout() {
      console.log('logout');
      this.svc.logout();
      this.$router.push('login');
    }
  }
</script>
