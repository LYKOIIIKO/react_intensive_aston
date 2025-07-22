import Grid from "@mui/material/Grid"
import { Outlet, useParams } from "react-router"
import useUsers from "../../features/UsersList/model/hooks/useUsers"
import UserInfo from "../../widgets/UserInfo/ui/UserInfo"
import UserTabs from "../../widgets/UserTabs/ui/UserTabs"
import Page404 from "../404/Page404"

function UserPage() {
	const { userId } = useParams()

	if (!userId) return

	const { userById, error, isLoading } = useUsers(+userId)

	if (isLoading) return <p>Загрузка...</p>

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	return userById ? (
		<Grid container spacing={3}>
			<Grid size={{ xs: 12, md: 4 }}>
				<UserInfo user={userById} />
			</Grid>
			<Grid container size={{ xs: 12, md: "grow" }}>
				<Grid size={12}>
					<UserTabs />
				</Grid>
				<Grid size={12}>
					<Outlet />
				</Grid>
			</Grid>
		</Grid>
	) : (
		<Page404 />
	)
}
export default UserPage
