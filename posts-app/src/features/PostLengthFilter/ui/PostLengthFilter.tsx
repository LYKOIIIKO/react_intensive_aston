import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import React from "react"

type PostLengthFilterProps = {
	value: number[]
	changeValue: (value: number[]) => void
	maxValue: number
}

function PostLengthFilter({ value, changeValue, maxValue }: PostLengthFilterProps) {
	const handleChange = (e: Event, value: number[]) => {
		e.preventDefault()
		changeValue(value)
	}

	return (
		<div>
			<Box>
				<Typography textAlign="center" fontWeight="bold">
					Длина заголовка
				</Typography>
				<Slider getAriaLabel={() => "post-length-filter-group"} name="post-length-filter" value={value} max={maxValue} step={1} onChange={handleChange} valueLabelDisplay="auto" />
				<Typography textAlign="center">
					{value[0]} симв. - {value[1]} симв.
				</Typography>
			</Box>
		</div>
	)
}
export default React.memo(PostLengthFilter)
