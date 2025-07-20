import { api } from "../../../app/providers/store/services/api"
import type { ToDo } from "../../../shared/types/ToDo"

const todosApi = api.injectEndpoints({
	endpoints: (build) => ({
		getToDos: build.query<ToDo[], void>({
			query: () => "todos",
		}),
		getToDosByUserId: build.query<ToDo[], number>({
			query: (id) => `todos?userId=${id}`,
		}),
	}),
})

export const { useGetToDosQuery, useGetToDosByUserIdQuery } = todosApi
