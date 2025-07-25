import { api } from "@app/providers/store/services/api"
import type { ToDo } from "../model/types"

const todosApi = api.injectEndpoints({
	endpoints: (build) => ({
		getToDos: build.query<ToDo[], void>({
			query: () => "todos",
			providesTags: ["Users"],
		}),
		getToDosByUserId: build.query<ToDo[], number>({
			query: (id) => `todos?userId=${id}`,
			providesTags: ["Users"],
		}),
	}),
})

export const { useGetToDosQuery, useGetToDosByUserIdQuery } = todosApi
