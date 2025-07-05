import PostCard from "../../entities/post/ui/PostCard"
import { fakePosts as posts } from "../../mocks/mocks"

function PostList() {
	return (
		<ul>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</ul>
	)
}
export default PostList
