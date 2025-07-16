import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import React from "react"
import CommentCard from "../../../entities/comment/ui/CommentCard"
import type { PostCardProps } from "../../../entities/post/ui/PostCard"
import { fakeComments as comments } from "../../../mocks/fakeComments"
import s from "./CommentList.module.css"

type CommentListProps = {
	post: PostCardProps["post"]
	open: boolean
	toogle: () => void
}

function CommentList({ post, open, toogle }: CommentListProps) {
	const handleToogle = () => toogle()

	return (
		<div>
			<div className={s.accordionSummary} onClick={handleToogle}>
				<Typography fontWeight="bold">Комментарии</Typography>
				<ExpandMoreIcon />
			</div>
			{open && (
				<List>
					{comments.map((comment) => {
						if (comment.postId === post.id)
							return (
								<React.Fragment key={comment.id}>
									<Divider />
									<CommentCard comment={comment} />
								</React.Fragment>
							)
					})}
				</List>
			)}
		</div>
	)
}
export default React.memo(CommentList)
