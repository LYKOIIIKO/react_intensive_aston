import { api } from "../../../app/providers/store/services/api"
import type { Post } from "../../../shared/types/Post"

const postsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPosts: build.query<Post[], void>({
			query: () => "posts",
		}),
	}),
})

export const { useGetPostsQuery } = postsApi
