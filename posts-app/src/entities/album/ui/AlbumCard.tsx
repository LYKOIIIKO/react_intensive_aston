import ListItem from "@mui/material/ListItem"
import { Link } from "react-router"
import type { Album } from "../model/types"

type AlbumCardProps = {
	album: Album
}

function AlbumCard({ album }: AlbumCardProps) {
	return (
		<ListItem key={album.id}>
			<Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
		</ListItem>
	)
}
export default AlbumCard
