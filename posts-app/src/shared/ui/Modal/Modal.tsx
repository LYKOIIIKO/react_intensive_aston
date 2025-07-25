import ModalContext from "@shared/context/ModalContext"
import { useTheme } from "@shared/lib/theme/useTheme"
import Portal from "@shared/portal/Portal"
import type { PropsWithChildren } from "react"
import * as s from "./Modal.module.css"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

type ModalProps = {
	toogle: () => void
}
function Modal({ toogle, children }: PropsWithChildren<ModalProps>) {
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

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
