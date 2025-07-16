import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import React from "react"
import { useParams } from "react-router"
import CommentCard from "../../../entities/comment/ui/CommentCard"
import { fakeComments } from "../../../mocks/fakeComments"
import { fakePosts } from "../../../mocks/fakePosts"

function CommentsPage() {
	const { userId } = useParams()

	//поскольку комментарии не содержат userId приходится перебирать сначала посты по userId, а потом перебирать отфильтрованные посты по postId

	const postsArr = fakePosts.filter((post) => post.userId === +userId)

	const commentsArr = postsArr.map((post) => {
		return fakeComments.filter((comment) => {
			if (post.id === comment.postId) return comment
		})
	})

	//преобразование массива с вложенными массивами в обычный массив

	const comments = commentsArr.reduce(function (a, b) {
		return a.concat(b)
	})

	return comments.length ? (
		<List>
			{comments.map((comment) => (
				<React.Fragment key={comment.id}>
					<Divider />
					<CommentCard comment={comment} />
				</React.Fragment>
			))}
		</List>
	) : (
		<Typography>У пользователя нет комментариев</Typography>
	)
}
export default CommentsPage
