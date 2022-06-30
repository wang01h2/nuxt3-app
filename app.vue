<script setup>
useHead({
  title: 'Todo',
  link: [
    {
      rel: 'icon',
      href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>

<style>
@media (prefers-color-scheme: dark) {
  html {
    background-color: #101827;

  }

  .todo-view {
    background-color: #101827;
  }
}

#__nuxt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #F9FAFB;
}
</style>
