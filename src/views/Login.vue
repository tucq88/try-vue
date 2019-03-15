<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm></LoginForm>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoginForm from '@/components/Login.vue';

  @Component({
    components: {
      LoginForm
    }
  })
  export default class LoginPage extends Vue {
    mounted() {
      console.log('Login is rendered');
      const identity = localStorage.getItem('user');
      if (identity) {
        this.$router.push('about');
      }
    }
  }
</script>
