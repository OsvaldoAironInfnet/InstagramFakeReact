import { extendTheme } from "native-base";

const APP_THEME = extendTheme({
    colors: {
        primary: {
            100: "#000000",
            200: "#161616"
        },
        secondary: {
            100: "#ffffff"
        },
        tertiary: {
          100: '#0000ff'
        }
    },
    Heading: {
        baseStyle: () => {
          return {
            color:'secondary.100',
            fontWeight: 'normal',
          };
        },
      },

      fontConfig: {
        ComicSans: {
          100: {
            normal: "comicz",
            italic: "",
          }
        }
    },

    fonts: {
      heading: "comicz",
      body: "comicz",
      mono: "comicz",
    },
});

export default APP_THEME;