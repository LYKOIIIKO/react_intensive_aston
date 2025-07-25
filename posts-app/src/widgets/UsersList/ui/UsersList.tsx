import type { User } from "@entities/user/model/types"
import UserCard from "@entities/user/ui/UserCard"
import useUsers from "@features/UsersList/model/hooks/useUsers"
import ItemList from "@shared/ui/ItemList/ItemList"

function UsersList() {
	const { users, error, isLoading } = useUsers()

	if (isLoading) return <p>Загрузка...</p>

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	return <ItemList<User> items={users} renderItem={(user) => <UserCard key={user.id} user={user} />} />
}
export default UsersList
