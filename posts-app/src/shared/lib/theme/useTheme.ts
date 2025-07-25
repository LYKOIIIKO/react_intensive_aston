import ThemeContext from "@shared/context/ThemeContext"
import { useContext } from "react"

const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error("Необходимо использовать <ThemeProvider>")
	}

	return context
}

export { useTheme }
