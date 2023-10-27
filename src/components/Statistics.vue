<template>
  <v-row justify="center" class="ma-2">
    {{ timeHistoryStore.hist.length }}/5
  </v-row>
  <v-row justify="center" class="font-weight-bold ma-2">
    Ao5: --.---
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useTimeHistoryStore } from '@/store/timeHistory';
const timeHistoryStore = useTimeHistoryStore();
let historyLength = ref(timeHistoryStore.hist.length);
console.log(`History Length: ${historyLength.value}`);

function calculateAo5(): number | null {
  var total = 0;
  if (historyLength.value % 5 !== 0 || historyLength.value === 0) return null;
  for (var i = 0; i < 5; i++) {
    total += timeHistoryStore.hist[historyLength.value - i].time as unknown as number;
  }
  return total / 5;
}

</script>