import ListItem from "@mui/material/ListItem"
import type { Album } from "@shared/types/Album"
import { Link } from "react-router"

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
