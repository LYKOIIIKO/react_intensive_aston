import ModalContext from "@shared/context/ModalContext"
import { useContext } from "react"
import ButtonToogle from "../Button/ButtonToogle"

export default function ModalFooter() {
	const context = useContext(ModalContext)
	if (!context) return
	return <ButtonToogle action={context.toogle}>закрыть</ButtonToogle>
}
