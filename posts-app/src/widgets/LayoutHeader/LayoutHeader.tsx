import Typography from "@mui/material/Typography"
import { useState } from "react"
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import ButtonToogle from "../../shared/ui/Button/ButtonToogle.tsx"
import { Modal } from "../../shared/ui/Modal/Modal.tsx"
import s from "./LayoutHeader.module.css"

function LayoutHeader() {
	const [open, setOpen] = useState(false)

	const toogle = () => setOpen((prev) => !prev)

	return (
		<>
			<header className={s.header}>
				<div className={s.container}>
					<div className={s.textWrapper}>
						<Typography className={s.title} variant="h6" fontWeight={600}>
							Posts App
						</Typography>
						<ButtonToogle action={toogle}>о проекте</ButtonToogle>
					</div>
					<ThemeSwitcher />
				</div>
			</header>
			{open && (
				<Modal toogle={toogle}>
					<Modal.Header>О проекте</Modal.Header>
					<Modal.Body>
						"Posts app"- это учебный проект в рамках интенсива по React от компании
						Aston. В нем я учусь использовать возможности библиотеки, создавать
						структуру проекта, а также готовлюсь к тех.ревью.
					</Modal.Body>
					<Modal.Footer />
				</Modal>
			)}
		</>
	)
}
export default LayoutHeader
