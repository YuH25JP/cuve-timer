<template>
  <!-- <default-view /> -->
  <!-- <router-view /> -->
  <v-app>
    <v-navigation-drawer expand-on-hover rail>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          v-bind:to="{ name: 'home' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Settings"
          v-bind:to="{ name: 'settings' }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// import DefaultView from '@/layouts/default/View.vue'
</script>
