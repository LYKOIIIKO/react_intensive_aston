import { useGetAlbumsByUserQuery, useGetAlbumsQuery, useGetPhotosByAlbumIdQuery } from "@entities/album/api/albumsApi"
import type { Album } from "@entities/album/model/types"
import AlbumCard from "@entities/album/ui/AlbumCard"
import ItemList from "@shared/ui/ItemList/ItemList"
import PhotosList from "@widgets/PhotosList/ui/PhotosList"
import { useParams } from "react-router"

function AlbumsList() {
	const { albumId, userId } = useParams()

	const { data: albums, error, isLoading } = useGetAlbumsQuery()

	const { data: albumByUserId, error: errorUser, isLoading: isLoadingUser } = useGetAlbumsByUserQuery(+userId)

	const { data: photosByAlbumId, error: errorPhoto, isLoading: isLoadingPhoto } = useGetPhotosByAlbumIdQuery(+albumId)

	if (isLoading || isLoadingUser || isLoadingPhoto) return <p>Загрузка...</p>

	if (error) {
		if ("status" in error) {
			return <div>Ошибка: {error.status}</div>
		}
		return <div>Ошибка :{error.message}</div>
	} else if (errorUser) {
		if ("status" in errorUser) {
			return <div>Ошибка: {errorUser.status}</div>
		}
		return <div>Ошибка :{errorUser.message}</div>
	} else if (errorPhoto) {
		if ("status" in errorPhoto) {
			return <div>Ошибка: {errorPhoto.status}</div>
		}
		return <div>Ошибка :{errorPhoto.message}</div>
	}

	return (
		<>
			{!albumId && !userId && albums && <ItemList<Album> items={albums} renderItem={(album) => <AlbumCard key={album.id} album={album} />} />}

			{albumByUserId && <ItemList<Album> items={albumByUserId} renderItem={(album) => <AlbumCard key={album.id} album={album} />} />}

			{photosByAlbumId && <PhotosList photos={photosByAlbumId} />}
		</>
	)
}
export default AlbumsList
