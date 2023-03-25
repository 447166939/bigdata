declare global {
  declare module "*.svg";
  declare module "*.png";
  declare module "*.css"
}
import { PaletteType } from "@material-ui/core";
declare module "@material-ui/core/styles/createMuiTheme" {
  import { PaletteType } from "@material-ui/core";
  interface Theme {
    palette: {
      type: PaletteType;
    };
    custom: {
      background: React.CSSProperties["background"];
    };
  }
  // 允许用 `createMuiTheme` 来配置
  interface ThemeOptions {
    palette?: {
      type?: PaletteType;
    };
    custom?: {
      background?: React.CSSProperties["background"];
    };
  }
}
