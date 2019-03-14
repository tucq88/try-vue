<template>
  <form action="">
    <div>
      <label for="email">Email</label>
      <input type="email" placeholder="Your email" id="email" v-model="email">
    </div>
    <div>
      <label for="password">Password</label>
      <input type="passowrd" placeholder="Your secret password" id="password" v-model="password">
    </div>
    <div>
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  @Prop({default: ''}) public email!: string;
  @Prop({default: ''}) public password!: string;

  public login() {
    console.log(this.email, this.password);
  }

}
</script>

<style scoped lang="scss">
</style>
