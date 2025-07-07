import Typography from "@mui/material/Typography"
import { useTheme } from "../../lib/theme/useTheme"
import ButtonClose from "../Button/ButtonClose"
import * as s from "./Modal.module.css"

type ModalProps = {
	title: string
	handleClose: () => void
	children: React.ReactNode | React.ReactNode[]
}

function Modal({ title, handleClose, children }: ModalProps) {
	const { theme } = useTheme()
	return (
		<div className={s.wrapper}>
			<div className={`${s.container} modal-window-${theme}`}>
				<Typography className={s.title} variant="h6">
					{title}
				</Typography>
				<Typography className={s.description}>{children}</Typography>
				<ButtonClose handleClose={handleClose} />
			</div>
		</div>
	)
}

export default Modal
