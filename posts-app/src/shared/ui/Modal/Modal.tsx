import ModalContext from "../../context/ModalContext"
import { useTheme } from "../../lib/theme/useTheme"
import Portal from "../../portal/Portal"
import s from "./Modal.module.css"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

type ModalProps = {
	toogle: () => void
	children: React.ReactNode | React.ReactNode[]
}
function Modal({ toogle, children }: ModalProps) {
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
