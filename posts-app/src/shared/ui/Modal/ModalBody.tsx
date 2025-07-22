import Typography from "@mui/material/Typography"
import s from "./Modal.module.css"

type ModalBodyProps = {
	children: React.ReactNode
}

export default function ModalBody({ children }: ModalBodyProps) {
	return <Typography className={s.description}>{children}</Typography>
}
