<script setup lang="ts">

</script>

<template>
  <div class="todo-view w-screen flex flex-col items-center">
    <div class="header-view w-auto h-56 xl:h-72 2xl:h-72 flex justify-evenly flex-wrap items-center">
      <h1 class="text-6xl text-center w-full pt-10 dark:text-white dark:text-opacity-75 xl:pt-14 2xl:pt-16">
        👋
        Hello
      </h1>
      <h2 class="text-5xl text-blue-500 text-center w-full dark:text-opacity-75">
        ToDo
      </h2>
    </div>
    <TodoIndex
      class="w-5/6 h-16 bg-white xl:h-20 xl:w-4/12 2xl:h-20 2xl:w-4/12"
    />
    <div ref="scroll" class="flex justify-center items-center flex-col w-5/6 bg-white xl:w-4/12 2xl:w-4/12">
      <ul class="w-full">
        <TodoItem />
      </ul>
      <ul class="w-full">
        <TodoItem />
      </ul>
    </div>
    <div class="h-16 mt-12">
      <p class="text-xs text-gray-300 text-opacity-40 text-center select-none dark:text-gray-400 dark:text-opacity-10">
        双击编辑待办事项
      </p>
      <p class="text-xs text-gray-300 text-opacity-40 text-center select-none dark:text-gray-400 dark:text-opacity-10">
        Power by: NuxtJS
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
