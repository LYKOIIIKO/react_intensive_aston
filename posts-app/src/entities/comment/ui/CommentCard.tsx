import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import s from "./CommentCard.module.css"

type CommentCardProps = {
	comment: {
		postId: number
		id: number
		name: string
		email: string
		body: string
	}
}

function CommentCard({ comment }: CommentCardProps) {
	return (
		<ListItem className={s.itemContainer}>
			<div className={s.itemUserInfo}>
				<Typography>{comment.name}</Typography>
				<Typography>{comment.email}</Typography>
			</div>
			<Typography variant="body2">{comment.body}</Typography>
		</ListItem>
	)
}
export default CommentCard
