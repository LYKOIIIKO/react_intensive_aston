import type { RootState } from "@app/providers/store/slices"
import { selectPostById } from "@entities/post/model/slice/postSlice"
import type { Post } from "@entities/post/model/types"
import AddPost from "@entities/post/ui/AddPost"
import PostCard from "@entities/post/ui/PostCard"
import { filterByLength } from "@features/PostLengthFilter/lib/filterByLength"
import PostLengthFilter from "@features/PostLengthFilter/ui/PostLengthFilter"
import usePosts from "@features/PostList/model/hooks/usePosts"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Page404 from "@pages/404/Page404"
import ItemList from "@shared/ui/ItemList/ItemList"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

function PostList() {
	const { postId, userId } = useParams()

	const { posts, error, isLoading } = usePosts()

	const postById = useSelector((state: RootState) => (postId ? selectPostById(state, +postId) : undefined))

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	const maxTitleLength = useMemo(() => {
		return posts.reduce((max, i) => Math.max(max, i.title.length), 0)
	}, [posts])

	const [length, setLength] = useState(() => {
		const initialState = [0, maxTitleLength]
		return initialState
	})

	const filteredPosts = useMemo(() => {
		return filterByLength(posts, length)
	}, [length])

	let filteredPostsByUserId
	if (userId) filteredPostsByUserId = filteredPosts.filter((post) => post.userId === +userId)

	const handleChangeLength = useCallback((value: number[]) => {
		setLength(value)
	}, [])

	useEffect(() => {
		setLength([0, maxTitleLength])
	}, [maxTitleLength])

	if (isLoading) return <p>Загрузка...</p>

	return (
		<Grid container spacing={3}>
			<Grid>
				<AddPost />
			</Grid>
			{!postId && !userId && (
				<Grid size={{ xs: 12, md: 4 }}>
					<PostLengthFilter value={length} changeValue={handleChangeLength} maxValue={maxTitleLength} />
				</Grid>
			)}

			<Grid size="grow">
				{!postId && !userId && <ItemList<Post> items={filteredPosts} renderItem={(post) => <PostCard key={post.id} post={post} />} />}

				{filteredPostsByUserId && <ItemList<Post> items={filteredPostsByUserId} renderItem={(post) => <PostCard key={post.id} post={post} />} />}

				{postById && (
					<List>
						<PostCard post={postById} />
					</List>
				)}

				{!filteredPosts.length && (
					<Typography variant="h6" textAlign="center">
						Постов не найдено
					</Typography>
				)}

				{postId && !postById && <Page404 />}
			</Grid>
		</Grid>
	)
}
export default PostList
