import { defineStore } from "pinia";
import { ref } from "vue";

export const useCalculateStore = defineStore("calculateStore", () => {
  const operationList = ref([
    {
      text: "+",
      operationName: "Addition",
    },
    {
      text: "-",
      operationName: "Subtraction",
    },
    {
      text: "x",
      operationName: "Multiplication",
    },
    {
      text: "/",
      operationName: "Division",
    },
    {
      text: "%",
      operationName: "Modulo",
    },
    {
      text: "xʸ",
      operationName: "Exponentiation",
    },
  ]);
  return { operationList };
});
