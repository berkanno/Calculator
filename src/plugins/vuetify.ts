// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    surface: "#FFFFFF",
    primary: "#5C6BC0",
    "primary-darken-1": "#3F51B5",
    secondary: "#26A69A",
    "secondary-darken-1": "#00796B",
    error: "#D32F2F",
    info: "#29B6F6",
    success: "#66BB6A",
    warning: "#FFA726",
    background: "#F5F5F5",
    topMenuColor: "#4497a8",
    subMenuColor: "#ECEFF1",
    profileCardColor: "#FF7043",
    lastOrdersCardColor: "#FF7043",
    niceFontBlakc: "#0A0A0A",
    black: "#000000",
    darkPurple: "#762d7e",
    secondarymenu: "#4497a8",
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VCard: {
      variant: "flat",
      border: true,
      color: 'white',
    },
    VAppBar: {
      color: 'white'
    },
    VToolbar: {
      color: 'white'
    },
  },
})
