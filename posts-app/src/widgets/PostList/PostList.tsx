import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import { useEffect, useState } from "react"
import PostCard from "../../entities/post/ui/PostCard"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength"
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter"
import { fakePosts } from "../../mocks/fakePosts"

function PostList() {
	const maxTitleLength = fakePosts.reduce((max, i) => Math.max(max, i.title.length), -Infinity)

	const [length, setLength] = useState([0, maxTitleLength])

	const handleChangeLength = (value: number[]) => {
		setLength(value)
	}

	let filteredPosts = filterByLength(length)

	useEffect(() => {
		filteredPosts = filterByLength(length)
	}, [length])

	return (
		<Grid container spacing={3}>
			<Grid size={{ xs: 12, md: 4 }}>
				<PostLengthFilter
					value={length}
					changeValue={handleChangeLength}
					maxValue={maxTitleLength}
				/>
			</Grid>
			<Grid size="grow">
				<List>
					{filteredPosts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</List>
			</Grid>
		</Grid>
	)
}
export default PostList
