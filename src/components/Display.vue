<template>
    <div class="display">{{ value }}</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      value: { type: String as PropType<string>, required: true }
    }
  });
  </script>
  
  <style scoped>
 .display {
  font-size: 2rem;
  background-color: #1f1f1f; /* Dark display for contrast */
  color: #f5f5f5; /* Light text color for readability */
  padding: 20px;
  width: 100%;
  text-align: right;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
}

  