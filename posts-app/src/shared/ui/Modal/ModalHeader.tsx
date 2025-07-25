import Typography from "@mui/material/Typography"
import type { PropsWithChildren } from "react"
import s from "./Modal.module.css"

export default function ModalHeader({ children }: PropsWithChildren) {
	return (
		<Typography className={s.title} variant="h6">
			{children}
		</Typography>
	)
}
