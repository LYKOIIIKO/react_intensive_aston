type PostCardProps = {
	post: {
		userId: number
		id: number
		title: string
		body: string
	}
}

const PostCard = ({ post }: PostCardProps) => {
	return (
		<li>
			<h5>{post.title}</h5>
			<p>{post.body}</p>
		</li>
	)
}
export default PostCard
