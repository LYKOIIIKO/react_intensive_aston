import { useRef, type PropsWithChildren } from "react"
import { createPortal } from "react-dom"

type PortalProps = {
	id: string
}

function Portal({ id = "portal-root", children }: PropsWithChildren<PortalProps>) {
	const rootRef = useRef<HTMLElement>(null)

	let container = document.getElementById(id)
	if (!container) {
		container = document.createElement("div")
		container.id = id
		document.body.appendChild(container)
	}
	rootRef.current = container

	return rootRef.current ? createPortal(children, rootRef.current) : null
}

export default Portal
