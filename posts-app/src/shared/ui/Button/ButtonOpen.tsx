import Button from "@mui/material/Button"

type ButtonOpenProps = {
	handleOpen: () => void
}

function ButtonOpen({ handleOpen }: ButtonOpenProps) {
	return (
		<Button variant="outlined" color="inherit" onClick={handleOpen}>
			открыть окно
		</Button>
	)
}
export default ButtonOpen
