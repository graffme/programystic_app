import {} from "styled-components";
import { lightTheme } from "../styles";

declare module "styled-components" {
  type Theme = typeof lightTheme;
  export interface DefaultTheme extends Theme {}
}
