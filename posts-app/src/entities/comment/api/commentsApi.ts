import { api } from "@app/providers/store/services/api"
import type { Comment } from "@shared/types/Comment"

const commentsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getComments: build.query<Comment[], void>({
			query: () => "comments",
			providesTags: ["Posts"],
		}),
		getCommentsByPostId: build.query<Comment[], number>({
			query: (id) => `comments?postId=${id}`,
			providesTags: ["Posts"],
		}),
	}),
})

export const { useGetCommentsQuery, useGetCommentsByPostIdQuery } = commentsApi
