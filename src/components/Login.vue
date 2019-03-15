<template>
  <form action>
    <p>Could use account test/test for logging in</p>
    <div>
      <label for="email">Email</label>
      <input type="email" placeholder="Your email" id="email" v-model="email">
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" placeholder="Your secret password" id="password" v-model="password">
    </div>
    <div>
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AuthService } from "@/services/auth";

@Component
export default class LoginForm extends Vue {
  public email: string = "";
  public password: string = "";
  private svc = new AuthService();

  public login() {
    this.svc
      .login({ email: this.email, password: this.password })
      .then(response => {
        this.$router.push('about');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style scoped lang="scss">
</style>
