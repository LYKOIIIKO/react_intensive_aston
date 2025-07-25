import AlbumsPage from "@pages/Albums/AlbumsPage"
import IndexPage from "@pages/Index/IndexPage"
import PhotoPage from "@pages/Photo/PhotoPage"
import PostsPage from "@pages/Posts/PostsPage"
import ToDosPage from "@pages/ToDos/ToDosPage"
import UserPage from "@pages/User/UserPage"
import UsersPage from "@pages/Users/UsersPage"
import MainLayout from "@shared/layouts/MainLayout"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <h1>Страница не найдена. Ошибка 404</h1>,
		children: [
			{ index: true, Component: IndexPage },

			{ path: "posts", Component: PostsPage },
			{ path: "posts/:postId", Component: PostsPage },

			{ path: "users", Component: UsersPage },
			{
				path: "users/:userId",
				Component: UserPage,
				children: [
					{ path: "posts", Component: PostsPage },
					{ path: "albums", Component: AlbumsPage },
					{ path: "todos", Component: ToDosPage },
				],
			},

			{ path: "albums", Component: AlbumsPage },
			{ path: "albums/:albumId/photos", Component: AlbumsPage },
			{ path: "albums/:albumId/photos/:photoId", Component: PhotoPage },
		],
	},
])

export default router
