import List from "@mui/material/List"
import UserCard from "../../../entities/user/ui/UserCard"
import { fakeUsers } from "../../../mocks/fakeUsers"
import s from "./UsersList.module.css"

function UsersList() {
	return (
		<List className={s.container}>
			{fakeUsers.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</List>
	)
}
export default UsersList
