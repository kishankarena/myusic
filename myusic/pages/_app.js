import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import "reset-css";

import { StoreProvider } from "easy-peasy";
import { store } from "../lib/store.js";

import PlayerLayout from "../components/PlayerLayout.js";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    components: {
      Button: {
        variants: {
          link: {
            ":focus": {
              outline: "none",
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
});
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <Head>
          <title>Myusic</title>
        </Head>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
