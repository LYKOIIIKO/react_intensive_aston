import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { useParams } from "react-router"
import ToDoCard from "../../../entities/todo/ui/ToDoCard"
import { fakeToDos } from "../../../mocks/fakeToDos"

function ToDosPage() {
	const { userId } = useParams()

	const todos = fakeToDos.filter((todo) => todo.userId === +userId)

	return todos.length ? (
		<List>
			{todos.map((todo) => (
				<ToDoCard key={todo.id} todo={todo} />
			))}
		</List>
	) : (
		<Typography>У пользователя нет задач</Typography>
	)
}
export default ToDosPage
