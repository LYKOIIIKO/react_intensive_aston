import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import type { User } from "@shared/types/User"
import { NavLink } from "react-router"
import s from "./UserCard.module.css"

export type UserCardProps = {
	user: User
}

function UserCard({ user }: UserCardProps) {
	return (
		<ListItem className={s.container}>
			<NavLink to={`/users/${user.id}`} className={s.link}>
				<Typography>{user.username}</Typography>
				<Typography>{user.name}</Typography>
			</NavLink>
		</ListItem>
	)
}
export default UserCard
