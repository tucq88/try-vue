<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/about">Requiring Logged In</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './styles/main.scss'
</style>
