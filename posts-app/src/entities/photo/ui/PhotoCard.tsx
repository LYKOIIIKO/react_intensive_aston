import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { Link } from "react-router"

type PhotoCardProps = {
	photo: {
		albumId: number
		id: number
		title: string
		url: string
		thumbnailUrl: string
	}
}

function PhotoCard({ photo }: PhotoCardProps) {
	return (
		<ImageListItem>
			<img srcSet={photo.thumbnailUrl} alt={photo.title} loading="lazy" />
			<Link to={`/albums/${photo.albumId}/photos/${photo.id}`}>
				<ImageListItemBar position="below" title={photo.title} />
			</Link>
		</ImageListItem>
	)
}
export default PhotoCard
