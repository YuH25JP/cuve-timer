/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#00bcd4",
          secondary: "#2196f3",
          accent: "#03a9f4",
          error: "#f44336",
          warning: "#ffc107",
          info: "#9c27b0",
          success: "#3f51b5"
        },
      },
    },
  },
})
