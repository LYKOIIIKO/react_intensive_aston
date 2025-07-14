import Typography from "@mui/material/Typography"
import { createContext, useContext } from "react"
import { useTheme } from "../../lib/theme/useTheme"
import Portal from "../../portal/Portal"
import ButtonToogle from "../Button/ButtonToogle"
import * as s from "./Modal.module.css"

const ModalContext = createContext<{ toogle: () => void } | undefined>(undefined)

type ModalProps = {
	toogle: () => void
	children: React.ReactNode | React.ReactNode[]
}
export function Modal({ toogle, children }: ModalProps) {
	const { theme } = useTheme()

	return (
		<Portal id="portal-modal">
			<ModalContext.Provider value={{ toogle }}>
				<div className={s.wrapper}>
					<div className={`${s.container} modal-window-${theme}`}>{children}</div>
				</div>
			</ModalContext.Provider>
		</Portal>
	)
}

type ModalHeaderProps = {
	children: React.ReactNode | React.ReactNode[]
}

Modal.Header = ({ children }: ModalHeaderProps) => {
	return (
		<Typography className={s.title} variant="h6">
			{children}
		</Typography>
	)
}

type ModalBodyProps = {
	children: React.ReactNode | React.ReactNode[]
}

Modal.Body = ({ children }: ModalBodyProps) => {
	return <Typography className={s.description}>{children}</Typography>
}

Modal.Footer = () => {
	const context = useContext(ModalContext)
	return <ButtonToogle action={context.toogle}>закрыть</ButtonToogle>
}
