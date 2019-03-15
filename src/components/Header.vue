<template>
  <div id="nav">
    <router-link to="/login">Login</router-link>|
    <router-link to="/about">Requiring Logged In</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AuthService } from "@/services/auth";

@Component
export default class Header extends Vue {}
