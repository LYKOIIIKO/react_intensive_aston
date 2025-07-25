import Checkbox from "@mui/material/Checkbox"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import type { ToDo } from "@shared/types/ToDo"
import s from "./ToDoCard.module.css"

type ToDoCardProps = {
	todo: ToDo
}

function ToDoCard({ todo }: ToDoCardProps) {
	return (
		<ListItem>
			<div className={todo.completed ? s.complited : s.notComplited}>
				<Checkbox checked={todo.completed} disabled name="todo-checkbox" />
				<Typography>{todo.title}</Typography>
			</div>
		</ListItem>
	)
}
export default ToDoCard
