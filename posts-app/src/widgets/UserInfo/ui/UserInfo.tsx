import Typography from "@mui/material/Typography"
import { fakeUsers } from "../../../mocks/fakeUsers"

type UserInfoProps = {
	uid?: string
}

function UserInfo({ uid }: UserInfoProps) {
	if (uid == undefined) return

	let user = fakeUsers.find((user) => user.id === +uid)

	return (
		<div>
			<Typography>{user?.username}</Typography>
			<Typography variant="h6">{user?.name}</Typography>
			<Typography>{user?.email}</Typography>
			<Typography>{user?.phone}</Typography>
			<Typography>{user?.address.city}</Typography>
		</div>
	)
}
export default UserInfo
