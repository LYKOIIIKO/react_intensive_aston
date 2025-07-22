import Avatar from "@mui/material/Avatar"
import ListItem from "@mui/material/ListItem"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { useCallback, useState } from "react"
import { Link } from "react-router"
import type { Post } from "../../../shared/types/Post"
import CommentList from "../../../widgets/CommentList/ui/CommentList"
import { useGetCommentsByPostIdQuery } from "../../comment/api/commentsApi"
import s from "./PostCard.module.css"

type PostCardProps = {
	post: Post
}

const PostCard = ({ post }: PostCardProps) => {
	const { data: comments, error, isLoading } = useGetCommentsByPostIdQuery(post.id)

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	const [open, setOpen] = useState(false)

	const toogle = useCallback(() => {
		setOpen((prev) => !prev)
	}, [])

	return (
		<ListItem className={s.wrapper}>
			<Paper className={`${s.container} post-list-theme`}>
				<div className={s.postContainer}>
					<Link to={`/users/${post.userId}`} className={s.link}>
						<Avatar variant="rounded">{post.userId}</Avatar>
					</Link>

					<div>
						<Link to={`/posts/${post.id}`} className={s.link}>
							<Typography variant="h6">{post.title}</Typography>
						</Link>
						<Typography>{post.body}</Typography>
					</div>
				</div>

				{isLoading ? <p>Загрузка комментариев...</p> : comments?.length && <CommentList comments={comments} open={open} toogle={toogle} />}
			</Paper>
		</ListItem>
	)
}
export default PostCard
