import { defineStore } from "pinia";
import { ref } from "vue";

export const useCalculateStore = defineStore("calculateStore", () => {
  const resultValue = ref(null as null | number);
  const listForCount = ref([] as string[]);
  const operationValue = ref(null as null | string);
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
      text: "^",
      operationName: "Exponentiation",
    },
  ]);

  const numberClick = (_value: number) => {
    if (operationValue.value === null) {
      if (listForCount.value[0] === undefined)
        listForCount.value[0] = String(_value);
      else listForCount.value[0] += String(_value);
    } else {
      if (listForCount.value[1] === undefined)
        listForCount.value[1] = String(_value);
      else listForCount.value[1] += String(_value);
    }
    resultValue.value = null;
  };

  const operationClick = (_value: { text: string; operationName: string }) => {
    if (
      listForCount.value[0] !== undefined &&
      listForCount.value[1] === undefined
    )
      operationValue.value = _value.operationName;
    else operationValue.value = null;
  };

  const resetCalculate = () => {
    listForCount.value = []
    operationValue.value = null
    resultValue.value = null
  };

  const calculate = () => {
    if (listForCount.value[0] && listForCount.value[1] && operationValue) {
      if (operationValue.value === "Addition")
        resultValue.value =
          Number(listForCount.value[0]) + Number(listForCount.value[1]);
      else if (operationValue.value === "Subtraction")
        resultValue.value =
          Number(listForCount.value[0]) - Number(listForCount.value[1]);
      else if (operationValue.value === "Multiplication")
        resultValue.value =
          Number(listForCount.value[0]) * Number(listForCount.value[1]);
      else if (operationValue.value === "Division")
        resultValue.value =
          Number(listForCount.value[0]) / Number(listForCount.value[1]);
      else if (operationValue.value === "Modulo")
        resultValue.value =
          Number(listForCount.value[0]) % Number(listForCount.value[1]);
      else if (operationValue.value === "Exponentiation")
        resultValue.value =
          Number(listForCount.value[0]) ** Number(listForCount.value[1]);
    console.log(resultValue.value)
      operationValue.value = null
      listForCount.value = [];
      listForCount.value[0] = String(resultValue.value)
    }
  };

  return {
    resultValue,
    listForCount,
    operationValue,
    operationList,
    numberClick,
    operationClick,
    calculate,
    resetCalculate,
  };
});
