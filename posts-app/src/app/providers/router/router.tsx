import { createBrowserRouter } from "react-router"
import AlbumsPage from "../../../pages/albums-page"
import IndexPage from "../../../pages/index-page"
import PhotoPage from "../../../pages/photo-page"
import PostsPage from "../../../pages/posts-page"
import ToDosPage from "../../../pages/todos-page"
import UserPage from "../../../pages/user-page"
import UsersPage from "../../../pages/users-page"
import MainLayout from "../../../shared/layouts/MainLayout"

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <h1>Страница не найдена. Ошибка 404</h1>,
		children: [
			{ index: true, Component: IndexPage },
			{
				path: "posts",
				children: [
					{ index: true, Component: PostsPage },
					{ path: ":postId", Component: PostsPage },
				],
			},
			{
				path: "users",
				Component: UsersPage,
			},
			{
				path: "users/:userId",
				Component: UserPage,
				children: [
					{ path: "posts", Component: PostsPage },
					{ path: "albums", Component: AlbumsPage },
					{ path: "todos", Component: ToDosPage },
				],
			},
			{
				path: "albums",
				Component: AlbumsPage,
			},
			{
				path: "albums/:albumId/photos",
				Component: AlbumsPage,
			},
			{
				path: "albums/:albumId/photos/:photoId",
				Component: PhotoPage,
			},
		],
	},
])

export default router
