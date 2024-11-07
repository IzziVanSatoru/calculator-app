<template>
    <button @click="handleClick">{{ label }}</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      label: { type: String as PropType<string>, required: true }
    },
    emits: ['click'],
    methods: {
      handleClick() {
        this.$emit('click', this.label);
      }
    }
  });
  </script>
  
  <style scoped>
  button {
  padding: 15px;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0; /* Light neutral color for buttons */
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background-color: #d5d5d5;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: scale(0.98);
}
