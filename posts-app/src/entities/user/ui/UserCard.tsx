import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import { NavLink } from "react-router"
import s from "./UserCard.module.css"

export type UserCardProps = {
	user: {
		id: number
		name: string
		username: string
		email: string
		address: {
			street: string
			suite: string
			city: string
			zipcode: string
			geo: {
				lat: string
				lng: string
			}
		}
		phone: string
		website: string
		company: {
			name: string
			catchPhrase: string
			bs: string
		}
	}
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
