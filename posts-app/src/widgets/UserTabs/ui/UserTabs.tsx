import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import { NavLink } from "react-router"
import s from "./UserTabs.module.css"

function UserTabs() {
	return (
		<ButtonGroup variant="outlined" aria-label="user-tabs-group">
			<NavLink to="posts" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Button color="inherit">Посты</Button>
			</NavLink>
			<NavLink to="comments" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Button color="inherit">Комментарии</Button>
			</NavLink>
			<NavLink to="albums" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Button color="inherit">Альбомы</Button>
			</NavLink>
			<NavLink to="photos" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Button color="inherit">Фото</Button>
			</NavLink>
			<NavLink to="todos" className={({ isActive }) => (isActive ? s.linkActive : s.link)}>
				<Button color="inherit">Задачи</Button>
			</NavLink>
		</ButtonGroup>
	)
}

export default UserTabs
