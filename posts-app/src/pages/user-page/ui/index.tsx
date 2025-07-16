import Grid from "@mui/material/Grid"
import { Outlet, useParams } from "react-router"
import { fakeUsers } from "../../../mocks/fakeUsers"
import UserInfo from "../../../widgets/UserInfo/ui/UserInfo"
import UserTabs from "../../../widgets/UserTabs/ui/UserTabs"
import Page404 from "../../404-page"

function UserPage() {
	const { userId } = useParams()

	let checkId = fakeUsers.some((user) => user.id === +userId)

	return checkId ? (
		<Grid container spacing={3}>
			<Grid size={{ xs: 12, md: 4 }}>
				<UserInfo uid={userId} />
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
