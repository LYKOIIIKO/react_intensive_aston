import ThemeContext from "@shared/context/ThemeContext"
import { useEffect, useState, type PropsWithChildren } from "react"

const StorageKey = "app-theme"

const supportedThemes = {
	light: "light",
	dark: "dark",
}

export type Themes = keyof typeof supportedThemes

const getTheme = (): Themes => {
	let theme = localStorage.getItem(StorageKey)

	if (!theme) {
		localStorage.setItem(StorageKey, "light")
		theme = "light"
	}

	return theme as Themes
}

const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<Themes>(getTheme)

	useEffect(() => {
		localStorage.setItem(StorageKey, theme)
	}, [theme])

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				supportedThemes,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
