import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import type { Comment } from "../../../shared/types/Comment"
import s from "./CommentCard.module.css"

type CommentCardProps = {
	comment: Comment
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
