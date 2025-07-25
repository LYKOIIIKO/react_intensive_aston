import type { Themes } from "@shared/lib/theme/ThemeProvider"
import { createContext } from "react"

const ThemeContext = createContext<
	| {
			theme: Themes
			setTheme: (theme: Themes) => void
			supportedThemes: { [key: string]: string }
	  }
	| undefined
>(undefined)

export default ThemeContext
