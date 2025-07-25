import { createContext } from "react"
import type { Themes } from "../lib/theme/ThemeProvider"

const ThemeContext = createContext<
	| {
			theme: Themes
			setTheme: (theme: Themes) => void
			supportedThemes: { [key: string]: string }
	  }
	| undefined
>(undefined)

export default ThemeContext
