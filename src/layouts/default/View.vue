<template>
  <v-app id="inspire">
    <v-navigation-drawer expand-on-hover rail>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          :to="{ name: 'home' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Settings"
          :to="{ name: 'settings' }"
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
//
</script>
