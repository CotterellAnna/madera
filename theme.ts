import { AppShellMain, AppShellNavbar, createTheme, Title } from "@mantine/core";
import { cormorantGaramond, workSans } from "./styles/font";

const madera = [
  "#F4EDE4", //light
  "#e1d2cd",
  "#cdb9b1",
  "#b99f96",
  "#F1D7B6", //base
  "#6F5B56", //light text
  "#7a4849",
  "#613231",
  "#292524", //dark
  "#312119", //darkest
] as const;

export const theme = createTheme({
  fontFamily: `${workSans.style.fontFamily}, sans-serif`,
  headings: { fontFamily: `${cormorantGaramond.style.fontFamily}, sans-serif` },
  defaultRadius: "xs",
  colors: { madera },
  components: {
    AppShellMain: {
      defaultProps: {
        bg: madera[0]
      }
    },
    AppShellHeader: {
      defaultProps: {
        bg: madera[0]
      },
      styles: {
        borderBottom: "0.5px solid #FFFFFF"
      }
    },
    AppShellNavbar: {
      defaultProps: {
        bg: "rgba(241, 215, 182, 1)"
      },
      styles: {
        borderBottom: "0.5px solid #FFFFFF"
      }
    },
    Title:{
      defaultProps:{
        c: madera[9]
      }
    },
    Text: {
      defaultProps: {
        c: madera[8]
      }
    },
    Button: {
      defaultProps: {
        bg: madera[9],
        ff: `${cormorantGaramond.style.fontFamily}, sans-serif`,
        size: "md",
        style: {
          boxShadow: `2px 2px 10px 2px #31211964`
        }
      }
    }
  }
});