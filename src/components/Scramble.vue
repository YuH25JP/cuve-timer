<template>
  <v-row justify="center">
    <div class="container">
      <v-switch color="primary" label="Manual Scramble"></v-switch>
    </div>
  </v-row>
  <v-row justify="center" class="ma-2">
    <div class="container" style="width: 550px;">
      <v-textarea
        label="INPUT SCRAMBLES HERE"
        placeholder="1. F2 R2 B2 U B2 D F2 D U2 R' F' R' B R D U R' F D 
2. D2 B' U2 L2 U2 L2 F' U2 B' F U2 R U' F2 R2 B2 R2 B L F 
3. U B2 D2 F R2 F D2 U2 F L2 B D2 F L' B' D2 U L' D B2 R' 
4. U2 D2 F U' R B D R B U' B2 U2 R2 D' L2 F2 U R2 F2 U' R2 
5. R' D R2 D2 R' F2 R' U2 B2 R' B2 L' F2 U L2 R2 U2 F D' F2 "
        no-resize
        variant="solo"
        bg-color="primary"
      ></v-textarea>
    </div>
  </v-row>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>