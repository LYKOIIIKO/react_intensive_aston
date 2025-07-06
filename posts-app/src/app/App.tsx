import MainLayout from "../shared/layouts/MainLayout"
import ThemeProvider from "../shared/lib/theme/ThemeProvider"
import PostList from "../widgets/PostList/PostList"
import "./App.css"
import "./themes.css"

function App() {
	return (
		<ThemeProvider>
			<MainLayout>
				<PostList />
			</MainLayout>
		</ThemeProvider>
	)
}

export default App
