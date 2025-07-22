import Typography from "@mui/material/Typography"
import { useParams } from "react-router"
import { useGetPhotoByIdQuery } from "../../entities/photo/api/photosApi"
import Page404 from "../404/Page404"

function PhotoPage() {
	const { photoId } = useParams()

	if (!photoId) return

	const { data: photo, error, isLoading } = useGetPhotoByIdQuery(+photoId)

	//поскольку placeholder поменял домен для правильного отображения картинок преобразуем получаемую url в рабочую ссылку
	const photoURL = photo?.url.replace(/(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^\/]+))/, "https://placehold.co$2/FFF")

	if (isLoading) return <p>Загрузка фото...</p>

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	}

	return photo ? (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<Typography>{photo?.title}</Typography>
			<div style={{ width: "80%" }}>
				<img src={photoURL} alt={photo?.title} style={{ width: "100%" }} />
			</div>
		</div>
	) : (
		<Page404 />
	)
}
export default PhotoPage
