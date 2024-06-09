import { createContext, useContext } from "react";


export const ThemeContext = createContext({    // it is similar to the userContext.js file in the 06basicOfContextAPI
    themeMode : "light", 
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider  // it is similar to the userContextproviser.jsx file in the 06basicOfContextAPI

export default function useTheme(){  // Here we create a custome Hook so at the time of importing we will only import the useTheme() Hook Only, this hook it self contain a userContext() hook as well as the themeProvider property. 
    return useContext(ThemeContext)
}
