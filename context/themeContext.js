import { createContext } from "react";

//context om de theme state globaal te maken
const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
});

export default ThemeContext;
