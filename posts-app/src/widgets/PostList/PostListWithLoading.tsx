import usePosts from "../../features/PostList/model/hooks/usePosts"
import withLoading from "../../shared/lib/hoc/withLoading"
import PostList from "./PostList"

function PostListWithLoading() {
	const Posts = withLoading(PostList)

	const { isLoading } = usePosts()

	return <Posts isLoading={isLoading} />
}
export default PostListWithLoading
