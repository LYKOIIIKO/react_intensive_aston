import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import Typography from "@mui/material/Typography"
import { useParams } from "react-router"
import PhotoCard from "../../../entities/photo/ui/PhotoCard"
import { fakeAlbums } from "../../../mocks/fakeAlbums"
import { fakePhotos } from "../../../mocks/fakePhotos"

function PhotosList() {
	const { userId, albumId } = useParams()

	let albumsArr = []

	if (userId) {
		albumsArr = fakeAlbums.filter((album) => album.userId === +userId)
	} else albumsArr = fakeAlbums.filter((album) => albumId && album.id === +albumId)

	const photosArr = albumsArr.map((album) => {
		return fakePhotos.filter((photo) => {
			if (album.id === photo.albumId) return photo
		})
	})

	if (!photosArr.length) return <Typography>Фотографий пользователя нет</Typography>

	const photos = photosArr.reduce(function (a, b) {
		return a.concat(b)
	})

	if (!photos.length) return <Typography>Фотографий нет</Typography>

	return (
		<>
			{albumId && !userId && (
				<Box sx={{ overflowY: "scroll" }}>
					<ImageList variant="masonry" cols={3} gap={8}>
						{photos.map((photo) => (
							<PhotoCard key={photo.id} photo={photo} />
						))}
					</ImageList>
				</Box>
			)}
			{userId && (
				<Box sx={{ overflowY: "scroll" }}>
					<ImageList variant="masonry" cols={3} gap={8}>
						{photos.map((photo) => (
							<PhotoCard key={photo.id} photo={photo} />
						))}
					</ImageList>
				</Box>
			)}
		</>
	)
}
export default PhotosList
