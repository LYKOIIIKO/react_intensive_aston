import type { RootState } from "@app/providers/store/slices"
import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Post } from "@shared/types/Post"

const postAdapter = createEntityAdapter<Post>()

const postSlice = createSlice({
	name: "posts",
	initialState: postAdapter.getInitialState({ loading: "idle" }),
	reducers: {
		loadPosts(state) {
			if (state.loading === "idle") {
				state.loading = "pending"
			}
		},
		setPosts(state, action: PayloadAction<Post[]>) {
			if (state.loading === "pending") {
				postAdapter.setAll(state, action.payload)
				state.loading = "idle"
			}
		},
	},
})

export const { loadPosts, setPosts } = postSlice.actions

export const { selectAll: selectAllPosts, selectById: selectPostById, selectEntities: selectPostEntities } = postAdapter.getSelectors<RootState>((state) => state.posts)
export default postSlice
