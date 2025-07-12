import List from "@mui/material/List"
import PostCard from "../../entities/post/ui/PostCard"
import { fakePosts as posts } from "../../mocks/fakePosts"

function PostList() {
	return (
		<List>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</List>
	)
}
export default PostList
