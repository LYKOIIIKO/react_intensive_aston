import Typography from "@mui/material/Typography"
import { useState } from "react"
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import ButtonOpen from "../../shared/ui/Button/ButtonOpen.tsx"
import Modal from "../../shared/ui/Modal/Modal.tsx"
import s from "./LayoutHeader.module.css"

function LayoutHeader() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<header className={s.header}>
				<div className={s.container}>
					<div className={s.textWrapper}>
						<Typography className={s.title} variant="h6" fontWeight={600}>
							Posts App
						</Typography>
						<ButtonOpen handleOpen={handleOpen} />
					</div>
					<ThemeSwitcher />
				</div>
			</header>

			{open && (
				<Modal title="О проекте" handleClose={handleClose}>
					"Posts app"- это учебный проект в рамках интенсива по React от компании Aston. В
					нем я учусь использовать возможности библиотеки, создавать структуру проекта, а
					также готовлюсь к тех.ревью.
				</Modal>
			)}
		</>
	)
}
export default LayoutHeader
