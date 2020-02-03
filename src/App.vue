<template>
  <div id="app">
    <button @click="onButtonClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    onButtonClick () {
      this.$alert('Hello message from alert')
    }
  }
}
</script>

<style>
</style>
