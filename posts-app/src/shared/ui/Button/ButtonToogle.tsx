import Button from "@mui/material/Button"
import type React from "react"
import type { PropsWithChildren } from "react"

type ButtonToogleProps = {
	action: () => void | undefined
}

function ButtonToogle({ action, children }: PropsWithChildren<ButtonToogleProps>) {
	const handleToogle = (e: React.MouseEvent) => {
		e.preventDefault()
		action()
	}

	return (
		<Button variant="outlined" color="inherit" onClick={handleToogle}>
			{children}
		</Button>
	)
}
export default ButtonToogle
