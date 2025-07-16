import Avatar from "@mui/material/Avatar"
import ListItem from "@mui/material/ListItem"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { useCallback, useState } from "react"
import { Link } from "react-router"
import { fakeComments as comments } from "../../../mocks/fakeComments"
import CommentList from "../../../widgets/CommentList/ui/CommentList"
import s from "./PostCard.module.css"

export type PostCardProps = {
	post: {
		userId: number
		id: number
		title: string
		body: string
	}
}

const PostCard = ({ post }: PostCardProps) => {
	const [open, setOpen] = useState(false)

	const toogle = useCallback(() => {
		setOpen((prev) => !prev)
	}, [])

	const commentStatus = comments.some((item) => item.postId === post.id)

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

				{commentStatus && <CommentList post={post} open={open} toogle={toogle} />}
			</Paper>
		</ListItem>
	)
}
export default PostCard
