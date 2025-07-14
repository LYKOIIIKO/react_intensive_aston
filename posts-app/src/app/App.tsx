import { useEffect, useState } from "react"
import MainLayout from "../shared/layouts/MainLayout"
import withLoading from "../shared/lib/hoc/withLoading"
import ThemeProvider from "../shared/lib/theme/ThemeProvider"
import PostList from "../widgets/PostList/PostList"
import "./App.css"
import "./themes.css"

const PostListWithLoading = withLoading(PostList)

function App() {
	//временная имитация загрузки
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])

	return (
		<ThemeProvider>
			<MainLayout>
				<PostListWithLoading isLoading={loading} />
			</MainLayout>
		</ThemeProvider>
	)
}

export default App
