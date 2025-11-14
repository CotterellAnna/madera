import { AppShellMain, AppShellNavbar, createTheme, Title } from "@mantine/core";
import { cormorantGaramond, workSans } from "./styles/font";

export const theme = createTheme({
  fontFamily: `${workSans.style.fontFamily}, sans-serif`,
    headings: { fontFamily: `${cormorantGaramond.style.fontFamily}, sans-serif` },
    defaultRadius: "xs",
    components:{
      AppShellMain:{
        defaultProps:{
          bg: "#F4EDE4"
        }
      },
      AppShellHeader:{
        defaultProps:{
            bg: "#F4EDE4"
        },
        styles:{
            borderBottom: "0.5px solid #FFFFFF"
        }
      },
      AppShellNavbar:{
        defaultProps:{
            bg: "rgba(241, 215, 182, 1)"
        },
        styles:{
            borderBottom: "0.5px solid #FFFFFF"
        }
      },
      Text:{
        defaultProps:{
            color: "#292524"
        }
      },
      Button:{
        defaultProps:{
          bg: "#312119",
          ff: `${cormorantGaramond.style.fontFamily}, sans-serif`
        }
      }
    }
});