import React, { useEffect, useState } from "react"
import { ThemeContext } from "./useTheme"

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

const ThemeProvider = (props: { children: React.ReactNode }) => {
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
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
