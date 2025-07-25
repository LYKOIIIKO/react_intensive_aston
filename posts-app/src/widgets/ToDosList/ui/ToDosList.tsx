import { useGetToDosByUserIdQuery } from "@entities/todo/api/todosApi"
import type { ToDo } from "@entities/todo/model/types"
import ToDoCard from "@entities/todo/ui/ToDoCard"
import Typography from "@mui/material/Typography"
import ItemList from "@shared/ui/ItemList/ItemList"
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

	return todos?.length ? <ItemList<ToDo> items={todos} renderItem={(todo) => <ToDoCard key={todo.id} todo={todo} />} /> : <Typography>У пользователя нет задач</Typography>
}
export default ToDosList
