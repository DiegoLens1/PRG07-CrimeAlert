import { createContext } from "react";

//context om de crimeData state globaal te maken
const CrimeDataContext = createContext({
  crimeData: {},
  setCrimeData: () => {},
});

export default CrimeDataContext;
