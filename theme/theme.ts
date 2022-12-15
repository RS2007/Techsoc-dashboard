import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: {
      bold: `'Inter',sans-serif`,
      regular: `'Inter',sans-serif`,
    },
    poppins: {
      regular: `'Poppins',sans-serif`,
      bold: `'Poppins',sans-serif`,
      medium: `'Poppins',sans-serif`,
    },
  },
});

export default theme;
