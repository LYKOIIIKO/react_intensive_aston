import { api } from "../../../app/providers/store/services/api"
import type { Comment } from "../../../shared/types/Comment"

const commentsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getComments: build.query<Comment[], void>({
			query: () => "comments",
		}),
		getCommentsByPostId: build.query<Comment[], number>({
			query: (id) => `comments?postId=${id}`,
		}),
	}),
})

export const { useGetCommentsQuery, useGetCommentsByPostIdQuery } = commentsApi
