import Typography from "@mui/material/Typography"
import { NavLink } from "react-router"
import s from "./Navigation.module.css"

function Navigation() {
	return (
		<div className={s.container}>
			<NavLink to="users" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Typography fontWeight="bold">Все пользователи</Typography>
			</NavLink>
			<NavLink to="posts" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Typography fontWeight="bold">Все посты</Typography>
			</NavLink>
			<NavLink to="albums" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Typography fontWeight="bold">Все альбомы</Typography>
			</NavLink>
		</div>
	)
}
export default Navigation
