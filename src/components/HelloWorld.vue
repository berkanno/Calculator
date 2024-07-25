<template>
  <v-card class="fill-height  d-flex align-center">
    <v-card-text>
      <v-row justify="center">
        <v-col cols="2 position-relative">
          <v-card height="500" width="100%" class="border-sm border-opacity-100 rounded-lg">
            <v-card-text class="pa-0">
              <v-row>
                <v-col class="pt-10 px-10 border-b-sm">
                  <v-text-field bg-color="grey-lighten-3"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="px-10 py-6 d-flex justfiy-center">
                  <v-row>
                    <v-col cols="9">
                      <v-row>
                        <v-col v-for="(item, index) in operationList" :key="index" cols="4 py-1">
                          <v-btn height="40px" color="grey-lighten-2">{{ item.text }}</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="3 py-1 fill-height">
                      <v-btn height="100%" color="red-darken-1">AC</v-btn>
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
                          <v-btn height="40px" color="grey-lighten-2">{{ item }}</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="3 fill-height py-1">
                      <v-btn height="100%" class="text-h5" color="grey-darken-1">=</v-btn>
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
const { operationList } = storeToRefs(calculateStore)
</script>
