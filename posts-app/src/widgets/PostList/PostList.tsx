import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import type { RootState } from "../../app/providers/store/slices"
import { selectPostById } from "../../entities/post/model/slice/postSlice"
import PostCard from "../../entities/post/ui/PostCard"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength"
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter"
import usePosts from "../../features/PostList/model/hooks/usePosts"
import Page404 from "../../pages/404/Page404"

function PostList() {
	const { postId, userId } = useParams()

	const { posts, error, isLoading } = usePosts()

	const postById = useSelector((state: RootState) =>
		postId ? selectPostById(state, +postId) : undefined
	)

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	const maxTitleLength = useMemo(() => {
		return posts.reduce((max, i) => Math.max(max, i.title.length), 0)
	}, [posts])

	const [length, setLength] = useState([0, maxTitleLength])

	const filteredPosts = useMemo(() => {
		return filterByLength(posts, length)
	}, [length])

	const handleChangeLength = useCallback((value: number[]) => {
		setLength(value)
	}, [])

	useEffect(() => {
		setLength([0, maxTitleLength])
	}, [maxTitleLength])

	if (isLoading) return <p>Загрузка...</p>

	return (
		<Grid container spacing={3}>
			{!postId && !userId && (
				<Grid size={{ xs: 12, md: 4 }}>
					<PostLengthFilter
						value={length}
						changeValue={handleChangeLength}
						maxValue={maxTitleLength}
					/>
				</Grid>
			)}

			<Grid size="grow">
				<List>
					{!postId &&
						!userId &&
						filteredPosts.map((post) => <PostCard key={post.id} post={post} />)}

					{userId &&
						filteredPosts.map((post) => {
							if (post.userId === +userId)
								return <PostCard key={post.id} post={post} />
						})}

					{postById && <PostCard post={postById} />}

					{!filteredPosts.length && (
						<ListItem>
							<Typography variant="h6" textAlign="center">
								Постов не найдено
							</Typography>
						</ListItem>
					)}
				</List>

				{postId && !postById && <Page404 />}
			</Grid>
		</Grid>
	)
}
export default PostList
