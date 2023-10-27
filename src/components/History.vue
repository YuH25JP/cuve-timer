<template>
  <div class="timeHistory">
    <v-row justify="center">
      <v-card width="300" class="ma-1">
        <v-card-item>
          <v-card-title v-if="timeHistoryStore.hist.length === 0">--.---</v-card-title>
          <v-card-title v-else-if="timeHistoryStore.hist.length > 5">{{ timeHistoryStore.hist[timeHistoryStore.hist.length - 5].time }}</v-card-title>
          <v-card-title v-else>{{ timeHistoryStore.hist[0].time }}</v-card-title>
          <v-card-subtitle>No Scramble</v-card-subtitle>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>+2</v-btn>
          <v-divider vertical></v-divider>
          <v-btn>DNF</v-btn>
        </v-card-actions>
      </v-card>
      <v-card width="300" class="ma-1">
        <v-card-item>
          <v-card-title v-if="timeHistoryStore.hist.length <= 1">--.---</v-card-title>
          <v-card-title v-else-if="timeHistoryStore.hist.length > 5">{{ timeHistoryStore.hist[timeHistoryStore.hist.length - 4].time }}</v-card-title>
          <v-card-title v-else>{{ timeHistoryStore.hist[1].time }}</v-card-title>
          <v-card-subtitle>No Scramble</v-card-subtitle>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>+2</v-btn>
          <v-divider vertical></v-divider>
          <v-btn>DNF</v-btn>
        </v-card-actions>
      </v-card>
      <v-card width="300" class="ma-1">
        <v-card-item>
          <v-card-title v-if="timeHistoryStore.hist.length <= 2">--.---</v-card-title>
          <v-card-title v-else-if="timeHistoryStore.hist.length > 5">{{ timeHistoryStore.hist[timeHistoryStore.hist.length - 3].time }}</v-card-title>
          <v-card-title v-else>{{ timeHistoryStore.hist[2].time }}</v-card-title>
          <v-card-subtitle>No Scramble</v-card-subtitle>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>+2</v-btn>
          <v-divider vertical></v-divider>
          <v-btn>DNF</v-btn>
        </v-card-actions>
      </v-card>
      <v-card width="300" class="ma-1">
        <v-card-item>
          <v-card-title v-if="timeHistoryStore.hist.length <= 3">--.---</v-card-title>
          <v-card-title v-else-if="timeHistoryStore.hist.length > 5">{{ timeHistoryStore.hist[timeHistoryStore.hist.length - 2].time }}</v-card-title>
          <v-card-title v-else>{{ timeHistoryStore.hist[3].time }}</v-card-title>
          <v-card-subtitle>No Scramble</v-card-subtitle>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>+2</v-btn>
          <v-divider vertical></v-divider>
          <v-btn>DNF</v-btn>
        </v-card-actions>
      </v-card>
      <v-card width="300" class="ma-1">
        <v-card-item>
          <v-card-title v-if="timeHistoryStore.hist.length <= 4">--.---</v-card-title>
          <v-card-title v-else-if="timeHistoryStore.hist.length > 5">{{ timeHistoryStore.hist[timeHistoryStore.hist.length - 1].time }}</v-card-title>
          <v-card-title v-else>{{ timeHistoryStore.hist[4].time }}</v-card-title>
          <v-card-subtitle>No Scramble</v-card-subtitle>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>+2</v-btn>
          <v-divider vertical></v-divider>
          <v-btn>DNF</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTimeHistoryStore } from '@/store/timeHistory';
const timeHistoryStore = useTimeHistoryStore();
// let historyLength = timeHistoryStore.hist.length;

</script>

<style scoped>
.timeHistory {
  text-align: center;
  margin: 20px;
}
</style>