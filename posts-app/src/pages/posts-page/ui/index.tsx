import usePosts from "../../../features/PostList/model/hooks/usePosts"
import withLoading from "../../../shared/lib/hoc/withLoading"
import PostList from "../../../widgets/PostList/PostList"

const PostListWithLoading = withLoading(PostList)

function PostsPage() {
	const { isLoading } = usePosts()
	return <PostListWithLoading isLoading={isLoading} />
}
export default PostsPage
