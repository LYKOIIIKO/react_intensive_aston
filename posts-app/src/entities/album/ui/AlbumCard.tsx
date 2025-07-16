import ListItem from "@mui/material/ListItem"
import { Link } from "react-router"

type AlbumCardProps = {
	album: {
		userId: number
		id: number
		title: string
	}
}

function AlbumCard({ album }: AlbumCardProps) {
	return (
		<ListItem key={album.id}>
			<Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
		</ListItem>
	)
}
export default AlbumCard
