import Button from "@mui/material/Button"

type ButtonToogleProps = {
	action: () => void | undefined
	children: string
}

function ButtonToogle({ action, children }: ButtonToogleProps) {
	const handleToogle = () => action()

	return (
		<Button variant="outlined" color="inherit" onClick={handleToogle}>
			{children}
		</Button>
	)
}
export default ButtonToogle
