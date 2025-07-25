import type { User } from "@entities/user/model/types"
import Typography from "@mui/material/Typography"

type UserInfoProps = {
	user: User
}

function UserInfo({ user }: UserInfoProps) {
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
