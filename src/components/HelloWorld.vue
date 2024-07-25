<template>
  <v-card class="fill-height  d-flex align-center">
    <v-card-text>
      <v-row justify="center">
        <v-col cols="10" sm="5" md="4" lg="3" xl="2" >
          <v-card height="500" width="100%" class="border-sm border-opacity-100 rounded-lg">
            <v-card-text class="px-0">
              <v-row>
                <v-col class="px-10 border-b-sm">
                  <v-card height="90px" class="border-sm border border-opacity-10 d-flex align-end" readonly color="grey-lighten-3">
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-row>
                            <v-spacer />
                            <v-col cols="auto" v-if="resultValue !== null" class="text-grey-darken-2">{{resultValue}}</v-col>
                            <v-col cols="auto" v-else class="text-grey-darken-2"> {{ `${listForCount?.[0] ?? ''} ${operationList.find( e => e.operationName === operationValue)?.text ?? ''} ${listForCount?.[1] ?? ''}` }}</v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="px-10 py-6 d-flex justfiy-center">
                  <v-row>
                    <v-col cols="9">
                      <v-row>
                        <v-col v-for="(item, index) in operationList" :key="index" cols="4 py-1">
                          <v-btn height="40px" color="grey-lighten-2" @click="operationClick(item)" >{{ item.text }}</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="3 py-1 fill-height">
                      <v-btn height="100%" color="red-darken-1" @click="resetCalculate()">AC</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="px-10 d-flex justfiy-center">
                  <v-row>
                    <v-col cols="9">
                      <v-row justify="center">
                        <v-col v-for="(item, index) in [1,2,3,4,5,6,7,8,9,0]" :key="index" cols="4 py-1">
                          <v-btn height="40px" color="grey-lighten-2" @click="numberClick(item)" >{{ item }}</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="3 fill-height py-1">
                      <v-btn height="100%" class="text-h5" color="grey-darken-1" @click="calculate()">=</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useCalculateStore } from "@/store/calculateStore"
import { storeToRefs } from "pinia";

const calculateStore = useCalculateStore()
const { operationList, operationValue, listForCount, resultValue } = storeToRefs(calculateStore)
const { numberClick, operationClick, calculate, resetCalculate } = calculateStore
</script>
