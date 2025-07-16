import { useEffect, useState } from "react"
import withLoading from "../../../shared/lib/hoc/withLoading"
import PostList from "../../../widgets/PostList/PostList"

const PostListWithLoading = withLoading(PostList)

function PostsPage() {
	//временная имитация загрузки
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])
	//

	return <PostListWithLoading isLoading={loading} />
}
export default PostsPage
