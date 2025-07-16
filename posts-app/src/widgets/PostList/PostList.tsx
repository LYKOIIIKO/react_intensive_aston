import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import { useCallback, useMemo, useState } from "react"
import { useParams } from "react-router"
import PostCard from "../../entities/post/ui/PostCard"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength"
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter"
import usePosts from "../../features/PostList/model/hooks/usePosts"

function PostList() {
	const { postId, userId } = useParams()

	const fakePosts = usePosts()

	const maxTitleLength = useMemo(() => {
		return fakePosts.reduce((max, i) => Math.max(max, i.title.length), -Infinity)
	}, [fakePosts])

	const [length, setLength] = useState([0, maxTitleLength])

	const filteredPosts = useMemo(() => {
		return filterByLength(length)
	}, [length])

	const handleChangeLength = useCallback((value: number[]) => {
		setLength(value)
	}, [])

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
					{!filteredPosts.length && (
						<div>
							<Typography variant="h6" textAlign="center">
								Постов не найдено
							</Typography>
						</div>
					)}
					{(postId || userId) &&
						filteredPosts.map((post) => {
							if (post.id === +postId || post.userId === +userId)
								return <PostCard key={post.id} post={post} />
						})}
				</List>
			</Grid>
		</Grid>
	)
}
export default PostList
