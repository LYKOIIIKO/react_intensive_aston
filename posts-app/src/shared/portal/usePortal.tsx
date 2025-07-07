import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

function usePortal(id = "portal-root") {
	const rootRef = useRef<HTMLElement>(null)

	useEffect(() => {
		let container = document.getElementById(id)
		if (!container) {
			container = document.createElement("div")
			container.id = id
			document.body.appendChild(container)
		}
		rootRef.current = container
	}, [id])

	type PortalProps = {
		children: React.ReactNode
	}
	const Portal = ({ children }: PortalProps) => {
		console.log(rootRef.current)

		return rootRef.current ? createPortal(children, rootRef.current) : null
	}

	return Portal
}

export default usePortal
