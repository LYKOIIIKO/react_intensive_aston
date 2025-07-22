import { useEffect, useState } from "react"
import withLoading from "../../shared/lib/hoc/withLoading"
import PostList from "./PostList"

function PostListWithLoading() {
	const Posts = withLoading(PostList)

	//временная имитация загрузки
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])

	return <Posts isLoading={loading} />
}
export default PostListWithLoading
