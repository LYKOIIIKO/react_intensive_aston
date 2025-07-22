import { useContext } from "react"
import ButtonToogle from "../Button/ButtonToogle"
import { ModalContext } from "./Modal"

export default function ModalFooter() {
	const context = useContext(ModalContext)
	if (!context) return
	return <ButtonToogle action={context.toogle}>закрыть</ButtonToogle>
}
