import List from "@mui/material/List"
import UserCard from "../../../entities/user/ui/UserCard"
import useUsers from "../../../features/UsersList/model/hooks/useUsers"
import s from "./UsersList.module.css"

function UsersList() {
	const { users, error, isLoading } = useUsers()

	if (isLoading) return <p>Загрузка...</p>

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	return (
		<List className={s.container}>
			{users?.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</List>
	)
}
export default UsersList
