<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3B8070;
  text-decoration: none;
  border: 1px solid #3B8070;
  border-radius: 4px;
}

.button--green:hover {
  color: #FFF;
  background-color: #3B8070;
}

.button--grey {
  display: inline-block;
  margin-left: 15px;
  padding: 10px 30px;
  color: #35495E;
  text-decoration: none;
  border: 1px solid #35495E;
  border-radius: 4px;
}

.button--grey:hover {
  color: #FFF;
  background-color: #35495E;
}
</style>
