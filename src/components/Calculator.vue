<template>
  <div class="calculator">
    <div class="display">{{ displayValue }}</div>
    <div class="buttons">
      <button
        v-for="button in buttons"
        :key="button"
        @click="onButtonClick(button)"
        :class="{ operation: isOperation(button), clear: button === 'C' }"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const displayValue = ref('0');
    const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/', '=', 'C'];

    const onButtonClick = (label: string) => {
      if (label === 'C') {
        displayValue.value = '0';
      } else if (label === '=') {
        try {
          // Evaluate the expression
          displayValue.value = eval(displayValue.value);
        } catch {
          displayValue.value = 'Error';
        }
      } else {
        // Clear initial '0' if entering a new number
        if (displayValue.value === '0') {
          displayValue.value = label;
        } else {
          displayValue.value += label;
        }
      }
    };

    const isOperation = (button: string) => {
      return ['+', '-', '*', '/'].includes(button);
    };

    return { displayValue, buttons, onButtonClick, isOperation };
  },
});
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff; /* White background for a minimalist look */
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.display {
  font-size: 2rem;
  background-color: #333; /* Dark display background for contrast */
  color: #fff;
  padding: 20px;
  width: 100%;
  text-align: right;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
}

button {
  padding: 15px;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0; /* Light neutral button color */
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

button:hover {
  background-color: #bdbdbd;
}

button:active {
  transform: scale(0.95); /* Slight scale effect on click */
}

button.operation {
  background-color: #4CAF50; /* Green accent for operation buttons */
  color: #fff;
}

button.clear {
  background-color: #FF6B6B; /* Soft red for clear button */
  color: #fff;
}
</style>
