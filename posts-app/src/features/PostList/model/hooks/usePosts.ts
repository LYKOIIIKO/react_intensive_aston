import { store } from "@app/providers/store"
import type { RootState } from "@app/providers/store/slices"
import { useGetPostsQuery } from "@entities/post/api/postsApi"
import { loadPosts, selectAllPosts, selectPostById, setPosts } from "@entities/post/model/slice/postSlice"
import { useEffect } from "react"
import { useSelector } from "react-redux"

function usePosts(id?: number) {
	const { data, error, isLoading } = useGetPostsQuery()

	const posts = useSelector(selectAllPosts)

	let postById
	if (id) postById = useSelector((state: RootState) => selectPostById(state, id))

	useEffect(() => {
		store.dispatch(loadPosts())
		if (!isLoading && data) {
			store.dispatch(setPosts(data))
		}
	}, [isLoading])

	return id ? { posts, postById, error, isLoading } : { posts, error, isLoading }
}
export default usePosts
