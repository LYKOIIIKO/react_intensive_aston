import Typography from "@mui/material/Typography"
import { useParams } from "react-router"
import { fakePhotos } from "../../mocks/fakePhotos"

function PhotoPage() {
	const { photoId } = useParams()
	const photo = fakePhotos.find((photo) => photoId && photo.id === +photoId)
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<Typography>{photo?.title}</Typography>
			<div style={{ width: "80%" }}>
				<img src={photo?.url} alt={photo?.title} style={{ width: "100%" }} />
			</div>
		</div>
	)
}
export default PhotoPage
