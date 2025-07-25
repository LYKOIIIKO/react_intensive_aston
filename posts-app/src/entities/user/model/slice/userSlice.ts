import type { RootState } from "@app/providers/store/slices"
import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../types"

const userAdapter = createEntityAdapter<User>()

const userSlice = createSlice({
	name: "users",
	initialState: userAdapter.getInitialState({ loading: "idle" }),
	reducers: {
		loadUsers(state) {
			if (state.loading === "idle") {
				state.loading = "pending"
			}
		},
		setUsers(state, action: PayloadAction<User[]>) {
			if (state.loading === "pending") {
				userAdapter.setAll(state, action.payload)
				state.loading = "idle"
			}
		},
	},
})

export const { loadUsers, setUsers } = userSlice.actions

export const { selectAll: selectAllUsers, selectById: selectUserById } = userAdapter.getSelectors<RootState>((state) => state.users)

export default userSlice
