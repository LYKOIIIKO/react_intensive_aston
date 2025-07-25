import CommentCard from "@entities/comment/ui/CommentCard"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import type { Comment } from "@shared/types/Comment"
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
			{open && (
				<List>
					{comments.map((comment) => (
						<React.Fragment key={comment.id}>
							<Divider />
							<CommentCard comment={comment} />
						</React.Fragment>
					))}
				</List>
			)}
		</div>
	)
}
export default React.memo(CommentList)
