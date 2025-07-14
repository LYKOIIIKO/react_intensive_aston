import { fakePosts as posts } from "../../../mocks/fakePosts"

export function filterByLength(value: number[]) {
	if (value) {
		const filteredPosts = posts.filter((post) => {
			if (post.title.length >= value[0] && post.title.length <= value[1]) return post
		})

		return filteredPosts
	}
	return posts
}
