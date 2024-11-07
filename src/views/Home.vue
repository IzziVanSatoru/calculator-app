<template>
    <div class="container">
      <Calculator />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Calculator from '@/components/Calculator.vue';
  
  export default defineComponent({
    components: { Calculator }
  });
  </script>
  