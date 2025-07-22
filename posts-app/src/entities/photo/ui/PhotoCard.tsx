import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { Link } from "react-router"
import type { Photo } from "../../../shared/types/Photo"

type PhotoCardProps = {
	photo: Photo
}

function PhotoCard({ photo }: PhotoCardProps) {
	const photoURL = photo.url.replace(/(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^\/]+))/, "https://placehold.co$2/FFF")
	return (
		<ImageListItem>
			<img srcSet={photoURL} alt={photo.title} loading="lazy" />
			<Link to={`/albums/${photo.albumId}/photos/${photo.id}`}>
				<ImageListItemBar position="below" title={photo.title} />
			</Link>
		</ImageListItem>
	)
}
export default PhotoCard
