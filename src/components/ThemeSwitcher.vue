<template>
    <button @click="toggleTheme">{{ theme }} Mode</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const theme = ref('Light');
      const toggleTheme = () => {
        theme.value = theme.value === 'Light' ? 'Dark' : 'Light';
        document.body.classList.toggle('dark-mode');
      };
      return { theme, toggleTheme };
    }
  });
  </script>
  