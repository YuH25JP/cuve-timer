<template>
  <v-row justify="center" class="ma-2">
    <div class="container" style="width: 550px">
      <v-progress-linear
        v-model="solvePercent"
        color="primary"
        height="20"
        rounded
      ><strong>{{ historyLength }}/5</strong></v-progress-linear>
    </div>
  </v-row>
  <v-row justify="center" class="font-weight-bold ma-2">
    Ao5: --.---
  </v-row>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import { useTimeHistoryStore } from '@/store/timeHistory';
const timeHistoryStore = useTimeHistoryStore();
let historyLength = computed(() => timeHistoryStore.hist.length);
const solvePercent = ref(computed(() => timeHistoryStore.hist.length * 20));
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