import { api } from "@app/providers/store/services/api"
import type { User } from "../model/types"

const usersApi = api.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<User[], void>({
			query: () => "users",
			providesTags: ["Users"],
		}),
	}),
})

export const { useGetUsersQuery } = usersApi
