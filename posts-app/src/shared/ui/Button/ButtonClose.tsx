import Button from "@mui/material/Button"

type ButtonCloseProps = {
	handleClose: () => void
}

function ButtonClose({ handleClose }: ButtonCloseProps) {
	return (
		<Button variant="outlined" color="inherit" onClick={handleClose}>
			закрыть окно
		</Button>
	)
}
export default ButtonClose
