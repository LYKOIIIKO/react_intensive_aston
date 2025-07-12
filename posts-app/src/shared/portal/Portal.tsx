import { useRef } from "react"
import { createPortal } from "react-dom"

type PortalProps = {
	id: string
	children: React.ReactNode
}

function Portal({ id = "portal-root", children }: PortalProps) {
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
