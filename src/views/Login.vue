<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form action>
      <p>Could use account test/test for logging in</p>
      <p class="text-danger" v-if="error.message">{{ error.message }}</p>
      <div>
        <label for="email">Email </label>
        <input type="email" placeholder="Your email" id="email" v-model="email" autofocus="true">
        <br><br>
      </div>
      <div>
        <label for="password">Password </label>
        <input type="password" placeholder="Your secret password" id="password" v-model="password">
        <br><br>
      </div>
      <div>
        <button type="button" v-on:click="login()">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AuthService } from '@/services/auth';

@Component({})
export default class LoginPage extends Vue {
  email: string = '';
  password: string = '';
  error: Error = Error();
  private svc = new AuthService();

  mounted() {
    const identity = localStorage.getItem('user');
    if (identity) {
      this.$router.push('about');
    }
  }

  login() {
    this.svc
      .login({ email: this.email, password: this.password })
      .then(response => {
        this.$router.push('about');
      })
      .catch((error: Error) => {
        this.error = error;
        this.password = '';
      });
  }
}
</script>
