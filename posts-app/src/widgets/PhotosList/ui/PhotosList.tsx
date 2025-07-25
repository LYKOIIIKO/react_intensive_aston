import type { Photo } from "@entities/photo/model/types"
import PhotoCard from "@entities/photo/ui/PhotoCard"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"

type PhotosListProps = {
	photos: Photo[]
}

function PhotosList({ photos }: PhotosListProps) {
	return (
		<>
			<Box sx={{ overflowY: "scroll" }}>
				<ImageList variant="masonry" cols={3} gap={8}>
					{photos.map((photo) => (
						<PhotoCard key={photo.id} photo={photo} />
					))}
				</ImageList>
			</Box>
		</>
	)
}
export default PhotosList
