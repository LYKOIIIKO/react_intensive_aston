import type { Comment } from "@entities/comment/model/types"
import CommentCard from "@entities/comment/ui/CommentCard"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Typography from "@mui/material/Typography"
import ItemList from "@shared/ui/ItemList/ItemList"
import React from "react"
import s from "./CommentList.module.css"

type CommentListProps = {
	comments: Comment[]
	open: boolean
	toogle: () => void
}

function CommentList({ comments, open, toogle }: CommentListProps) {
	return (
		<div>
			<div className={s.accordionSummary} onClick={toogle}>
				<Typography fontWeight="bold">Комментарии</Typography>
				<ExpandMoreIcon />
			</div>

			{open && <ItemList<Comment> items={comments} renderItem={(comment) => <CommentCard key={comment.id} comment={comment} />} />}
		</div>
	)
}
export default React.memo(CommentList)
