import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import s from "./LayoutHeader.module.css"

function LayoutHeader() {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.textWrapper}>
					<Typography variant="h6" fontWeight={600} className={s.title}>
						Posts App
					</Typography>
					<Button variant="outlined" className={s.btnAbout}>
						о проекте
					</Button>
				</div>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
export default LayoutHeader
