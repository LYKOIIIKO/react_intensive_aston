import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import type { Comment } from "../model/types"
import s from "./CommentCard.module.css"

type CommentCardProps = {
	comment: Comment
}

function CommentCard({ comment }: CommentCardProps) {
	return (
		<>
			<Divider />
			<ListItem className={s.itemContainer}>
				<div className={s.itemUserInfo}>
					<Typography>{comment.name}</Typography>
					<Typography>{comment.email}</Typography>
				</div>
				<Typography variant="body2">{comment.body}</Typography>
			</ListItem>
		</>
	)
}
export default CommentCard
