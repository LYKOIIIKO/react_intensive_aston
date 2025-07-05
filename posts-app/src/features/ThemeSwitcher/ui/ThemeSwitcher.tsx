import { useTheme } from "@emotion/react"
import Stack from "@mui/material/Stack"
import Switch from "@mui/material/Switch"
import Typography from "@mui/material/Typography"
import { useState } from "react"

function ThemeSwitcher() {
	const [checked, setChecked] = useState(true)
	const { theme, setTheme } = useTheme()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked)
		if (checked) {
			setTheme("light")
		} else {
			setTheme("dark")
		}
	}

	return (
		<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
			<Typography>Темная тема</Typography>
			<Switch defaultChecked checked={checked} onChange={handleChange} />
			<Typography>Светлая тема</Typography>
		</Stack>
	)
}
export default ThemeSwitcher
