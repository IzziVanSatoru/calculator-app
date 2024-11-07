import { defineStore } from 'pinia';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    displayValue: '0'
  }),
  actions: {
    appendToDisplay(value: string) {
      this.displayValue += value;
    },
    clearDisplay() {
      this.displayValue = '0';
    }
  }
});
