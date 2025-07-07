import { createContext, useContext } from "react"
import type { Themes } from "./ThemeProvider"

const ThemeContext = createContext<
	| {
			theme: Themes
			setTheme: (theme: Themes) => void
			supportedThemes: { [key: string]: string }
	  }
	| undefined
>(undefined)

const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error("Необходимо использовать <ThemeProvider>")
	}

	return context
}

export { ThemeContext, useTheme }
