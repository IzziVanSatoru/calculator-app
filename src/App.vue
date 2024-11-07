<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style>
/* Basic styles for dark mode */
body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}
</style>
