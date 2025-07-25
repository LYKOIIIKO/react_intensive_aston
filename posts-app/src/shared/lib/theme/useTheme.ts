import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error("Необходимо использовать <ThemeProvider>")
	}

	return context
}

export { ThemeContext, useTheme }
