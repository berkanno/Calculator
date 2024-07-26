import { RefSymbol } from "@vue/reactivity";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCalculateStore = defineStore("calculateStore", () => {
  const resultValue = ref(null as null | number);
  const listForCount = ref([] as string[]);
  const operationValue = ref(null as null | string);
  const listForAdvancedMath = ref([
    {
      text: "sin",
      operationName: "sin",
    },
    {
      text: "cos",
      operationName: "cos",
    },
    {
      text: "tan",
      operationName: "tan",
    },
    {
      text: "cot",
      operationName: "cot",
    },
    {
      text: "a",
      operationName: "a",
    },
    {
      text: "log",
      operationName: "log",
    },
    {
      text: "ln",
      operationName: "ln",
    },
    {
      text: "h",
      operationName: "h",
    },
  ] as const)
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
    console.log(listForCount.value,"dasdasdasd",resultValue.value)
    if(listForCount.value[0] === "Infinity")listForCount.value = []
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
    resultValue.value = null
    if (
      listForCount.value[0] !== undefined &&
      listForCount.value[1] === undefined
    )
      operationValue.value = _value.operationName;
    else operationValue.value = null;
  };

  const resetCalculate = () => {
    listForCount.value = [];
    operationValue.value = null;
    resultValue.value = null;
  };

  const deleteClick = () => {
    resultValue.value = null;
    if (listForCount.value[1] !== undefined) {
      listForCount.value[1] = listForCount.value[1].slice(
        0,
        listForCount.value[1].length - 1
      );
      if (listForCount.value[1] === "")
        listForCount.value = [listForCount.value[0]];
    } else if (operationValue.value) operationValue.value = null;
    else if (listForCount.value[0] !== undefined) {
      listForCount.value[0] = listForCount.value[0].slice(
        0,
        listForCount.value[0].length - 1
      );
      if (listForCount.value[0] === "") listForCount.value = [];
    }
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
        
      operationValue.value = null;
      listForCount.value = [];
      listForCount.value[0] = String(resultValue.value);
      console.log(resultValue.value,listForCount.value,"asdasdsa")
      if((resultValue.value as string | number) === Infinity) resultValue.value = null
    }
  };

  const advancedMathClick = (_value: (typeof listForAdvancedMath.value)[number]['operationName']) => {
    if(listForCount.value[0] != undefined && operationValue.value != null && listForCount.value[1] != undefined) calculate()
    else if (listForCount.value[0] != undefined && operationValue.value != null && listForCount.value[1] == undefined) operationValue.value = null
  }

  return {
    resultValue,
    listForCount,
    operationValue,
    operationList,
    listForAdvancedMath,
    numberClick,
    operationClick,
    calculate,
    resetCalculate,
    deleteClick,
    advancedMathClick,
  };
});
