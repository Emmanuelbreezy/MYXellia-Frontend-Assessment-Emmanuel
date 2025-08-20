import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "tomato" },
          secondary: { value: "#191919" },
          white: { value: "#fff" },
          blue: {
            "500": { value: "#4545FE" },
          },
          green: {
            "500": { value: "#12B76A" },
          },
          red: {
            "500": { value: "#F04438" },
          },
          black: {
            "500": { value: "#242526" },
            "600": { value: "#171717" },
            "900": { value: "#0D0D0D" },
          },
          gray: {
            "50": { value: "#F9FAFB" },
            "100": { value: "#F4F4F5" },
            "200": { value: "#E4E4E4" },
            "300": { value: "#919191" },
            "500": { value: "#F5F5F5" },
            "400": { value: "#606060" },
            "600": { value: "#525252" },
            "800": { value: "#292929" },
            "900": { value: "#18181B" },
            "950": { value: "#3D3D3D" },
          },
        },
      },
    },
    recipes: {
      button: {
        variants: {
          unstyled: {},
        },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
