import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import React from "react"
import type { PostCardProps } from "../../../entities/post/ui/PostCard"
import { fakeComments as comments } from "../../../mocks/fakeComments"
import * as s from "./CommentList.module.css"

type CommentListProps = {
	post: PostCardProps["post"]
	open: boolean
	toogle: () => void
}

function CommentList({ post, open, toogle }: CommentListProps) {
	return (
		<div>
			<div className={s.accordionSummary} onClick={toogle}>
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
									<ListItem className={s.itemContainer}>
										<div className={s.itemUserInfo}>
											<Typography>{comment.name}</Typography>
											<Typography>{comment.email}</Typography>
										</div>
										<Typography variant="body2">{comment.body}</Typography>
									</ListItem>
								</React.Fragment>
							)
					})}
				</List>
			)}
		</div>
	)
}
export default React.memo(CommentList)
