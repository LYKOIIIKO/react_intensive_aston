import { api } from "@app/providers/store/services/api"
import type { Post } from "@shared/types/Post"

const postsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPosts: build.query<Post[], void>({
			query: () => "posts",
			providesTags: ["Posts"],
		}),
		createPost: build.mutation({
			query: (newPost) => ({
				url: "/posts",
				method: "POST",
				body: newPost,
			}),
			invalidatesTags: ["Posts"],
		}),
	}),
})

export const { useGetPostsQuery, useCreatePostMutation } = postsApi
