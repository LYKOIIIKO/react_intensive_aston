import Button from "@mui/material/Button"
import { useCreatePostMutation } from "../api/postsApi"

function AddPost() {
	const [createPost, { isLoading, isSuccess }] = useCreatePostMutation()
	const handleSubmit = () => {
		createPost({ title: "new post" })
	}

	if (isLoading) return <p>Добавление поста...</p>
	if (isSuccess) return <p>Пост добавлен.</p>
	return (
		<Button onClick={handleSubmit} variant="outlined" color="inherit">
			Добавить пост
		</Button>
	)
}
export default AddPost
