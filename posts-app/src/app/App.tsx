import MainLayout from "../shared/layouts/MainLayout"
import ThemeProvider from "../shared/lib/theme/ThemeProvider"
import PostListWithLoading from "../widgets/PostList/PostListWithLoading"
import "./App.css"
import "./themes.css"

function App() {
	return (
		<ThemeProvider>
			<MainLayout>
				<PostListWithLoading />
			</MainLayout>
		</ThemeProvider>
	)
}

export default App
