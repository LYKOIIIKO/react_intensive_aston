import Typography from "@mui/material/Typography"
import type { PropsWithChildren } from "react"
import s from "./Modal.module.css"

export default function ModalBody({ children }: PropsWithChildren) {
	return <Typography className={s.description}>{children}</Typography>
}
