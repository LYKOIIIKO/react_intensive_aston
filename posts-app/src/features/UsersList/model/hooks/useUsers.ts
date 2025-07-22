import { useEffect } from "react"
import { useSelector } from "react-redux"
import { store } from "../../../../app/providers/store"
import type { RootState } from "../../../../app/providers/store/slices"
import { useGetUsersQuery } from "../../../../entities/user/api/usersApi"
import { loadUsers, selectAllUsers, selectUserById, setUsers } from "../../../../entities/user/model/slice/userSlice"

function useUsers(id?: number) {
	const { data, error, isLoading } = useGetUsersQuery()

	const users = useSelector(selectAllUsers)

	let userById
	if (id) userById = useSelector((state: RootState) => selectUserById(state, id))

	useEffect(() => {
		store.dispatch(loadUsers())
		if (!isLoading && data) {
			store.dispatch(setUsers(data))
		}
	}, [isLoading])

	return { users, userById, error, isLoading }
}
export default useUsers
