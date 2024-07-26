import { __internal__deprecationWarning } from "@babel/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCalculateStore = defineStore("calculateStore", () => {
  const resultValue = ref(null as null | number);
  const listForCount = ref([] as (string | undefined)[]);
  const listForCountAdvanced = ref([] as (string[] | undefined)[]);
  const operationValue = ref(null as null | string);
  const specificListForAdvanced = ref([[], []] as ("a" | "h")[][]);
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
    // {
    //   text: "cot",
    //   operationName: "cot",
    // },
    {
      text: "a",
      operationName: "a",
    },
    {
      text: "log/ln",
      operationName: "log",
    },
    {
      text: "h",
      operationName: "h",
    },
  ] as const);
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

  const getAdvancedText = computed(() => (_listForCountIndex: 0 | 1) => {
    if (
      [undefined, "Infinity"].includes(listForCount.value[_listForCountIndex])
    )
      return "";
    else if (
      listForCountAdvanced.value[_listForCountIndex] &&
      listForCount.value[_listForCountIndex] != undefined
    )
      return `${listForCountAdvanced.value[_listForCountIndex]}(${listForCount.value[_listForCountIndex]})`;
    return listForCount.value[_listForCountIndex] != undefined
      ? listForCount.value[_listForCountIndex]
      : "";
  });

  const getCalculateAdvancedValueResult = computed(
    () =>
      (_listForCountIndex: 0 | 1): number => {
        if (listForCountAdvanced.value[_listForCountIndex] != undefined) {
          const advancedValue =
            listForCountAdvanced.value[_listForCountIndex]?.[0];
          const value = Number(listForCount.value[_listForCountIndex]);
          const radian = value * (Math.PI / 180);
          const degree = value * (180 / Math.PI)
          if ("cos" === advancedValue) return roundNumber(Math.cos(radian));
          else if ("sin" === advancedValue) return roundNumber(Math.sin(radian));
          else if ("tan" === advancedValue) return roundNumber(Math.tan(radian));
          else if ("acos" === advancedValue) return roundNumber(Math.acos(degree));
          else if ("asin" === advancedValue) return roundNumber(Math.asin(degree));
          else if ("atan" === advancedValue) return roundNumber(Math.atan(degree));
          else if (advancedValue === "log") return Math.log(value);
          return Number(listForCount.value[_listForCountIndex]);
        }
        return Number(listForCount.value[_listForCountIndex]);
      }
  );

  var roundNumber = (number: number, decimals = 5) => {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
  };

  const numberClick = (_value: number) => {
    console.log(listForCount.value, "dasdasdasd", resultValue.value);
    if (listForCount.value[0] === "Infinity") listForCount.value = [];
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
    resultValue.value = null;
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
    specificListForAdvanced.value = [[], []];
    listForCountAdvanced.value = [];
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
          getCalculateAdvancedValueResult.value(0) +
          getCalculateAdvancedValueResult.value(1);
      else if (operationValue.value === "Subtraction")
        resultValue.value =
          getCalculateAdvancedValueResult.value(0) -
          getCalculateAdvancedValueResult.value(1);
      else if (operationValue.value === "Multiplication")
        resultValue.value =
          getCalculateAdvancedValueResult.value(0) *
          getCalculateAdvancedValueResult.value(1);
      else if (operationValue.value === "Division")
        resultValue.value =
          getCalculateAdvancedValueResult.value(0) /
          getCalculateAdvancedValueResult.value(1);
      else if (operationValue.value === "Modulo")
        resultValue.value =
          getCalculateAdvancedValueResult.value(0) %
          getCalculateAdvancedValueResult.value(1);
      else if (operationValue.value === "Exponentiation")
        resultValue.value =
          getCalculateAdvancedValueResult.value(0) **
          getCalculateAdvancedValueResult.value(1);

      operationValue.value = null;
      listForCount.value = [];
      listForCount.value[0] = String(resultValue.value);
      console.log(resultValue.value, listForCount.value, "asdasdsa");
      if ((resultValue.value as string | number) === Infinity)
        resultValue.value = null;
    }
  };

  const advancedMathClick = (
    _value: (typeof listForAdvancedMath.value)[number]["operationName"]
  ) => {
    if (
      _value !== "a" &&
      _value !== "h" &&
      listForCount.value[1] !== undefined
    ) {
      specificListForAdvanced.value[1] = [];
      listForCountAdvanced.value = [listForCountAdvanced.value[0], [_value]];
    } else if (
      listForCountAdvanced.value[1] != undefined &&
      !specificListForAdvanced.value[1]?.includes(_value as "a" | "h") &&
      (_value === "a" || _value === "h") &&
      ![listForCountAdvanced.value[1][0]].includes("log") &&
      ![listForCountAdvanced.value[1][0]].includes("ln")
    ) {
      specificListForAdvanced.value[1].push(_value);
      listForCountAdvanced.value[1] = [
        _value === "a"
          ? _value + listForCountAdvanced.value[1]
          : listForCountAdvanced.value[1] + _value,
      ];
    } else if (
      _value !== "a" &&
      _value !== "h" &&
      listForCount.value[0] != undefined &&
      listForCount.value[1] == undefined
    ) {
      specificListForAdvanced.value[0] = [];
      listForCountAdvanced.value = [[_value]];
    } else if (
      listForCountAdvanced.value[0] != undefined &&
      !specificListForAdvanced.value[0]?.includes(_value as "a" | "h") &&
      (_value === "a" || _value === "h") &&
      ![listForCountAdvanced.value[0][0]].includes("log") &&
      ![listForCountAdvanced.value[0][0]].includes("ln")
    ) {
      specificListForAdvanced.value[0].push(_value);
      listForCountAdvanced.value[0] = [
        _value === "a"
          ? _value + listForCountAdvanced.value[0]
          : listForCountAdvanced.value[0] + _value,
      ];
    }
    console.log(listForCountAdvanced.value, "asdasdsadas", _value);
  };

  return {
    resultValue,
    listForCount,
    operationValue,
    operationList,
    listForAdvancedMath,
    getAdvancedText,
    numberClick,
    operationClick,
    calculate,
    resetCalculate,
    deleteClick,
    advancedMathClick,
  };
});
