import { useGetToDosByUserIdQuery } from "@entities/todo/api/todosApi"
import ToDoCard from "@entities/todo/ui/ToDoCard"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { useParams } from "react-router"

function ToDosList() {
	const { userId } = useParams()

	const { data: todos, error, isLoading } = useGetToDosByUserIdQuery(+userId)

	if (isLoading) return <p>Загрузка задач...</p>

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	return todos?.length ? (
		<List>
			{todos.map((todo) => (
				<ToDoCard key={todo.id} todo={todo} />
			))}
		</List>
	) : (
		<Typography>У пользователя нет задач</Typography>
	)
}
export default ToDosList
