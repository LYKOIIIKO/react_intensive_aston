import Typography from "@mui/material/Typography"
import s from "./Modal.module.css"

type ModalHeaderProps = {
	children: React.ReactNode
}

export default function ModalHeader({ children }: ModalHeaderProps) {
	return (
		<Typography className={s.title} variant="h6">
			{children}
		</Typography>
	)
}
