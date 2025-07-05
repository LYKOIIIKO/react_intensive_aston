import type { FC } from "react"

type Props = {
	post: {
		userId: number
		id: number
		title: string
		body: string
	}
}

const PostCard: FC<Props> = ({ post }) => {
	return (
		<li>
			<h5>{post.title}</h5>
			<p>{post.body}</p>
		</li>
	)
}
export default PostCard
