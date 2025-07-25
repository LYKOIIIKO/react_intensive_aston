import { createContext } from "react"

const ModalContext = createContext<{ toogle: () => void } | undefined>(undefined)

export default ModalContext
