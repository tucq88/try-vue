<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/Login.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Home extends Vue {}
</script>
