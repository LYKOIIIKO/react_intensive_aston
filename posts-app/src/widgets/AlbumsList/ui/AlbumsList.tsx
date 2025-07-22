import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import React from "react"
import { useParams } from "react-router"
import AlbumCard from "../../../entities/album/ui/AlbumCard"
import { fakeAlbums } from "../../../mocks/fakeAlbums"
import PhotosList from "../../PhotosList/ui/PhotosList"

function AlbumsList() {
	const { albumId, userId } = useParams()

	const userAlbums = fakeAlbums.filter((album) => userId && album.userId === +userId)

	return (
		<List>
			{!albumId &&
				!userId &&
				fakeAlbums.map((album) => <AlbumCard key={album.id} album={album} />)}

			{albumId &&
				!userId &&
				fakeAlbums.map((album) => {
					if (album.id === +albumId)
						return (
							<React.Fragment key={album.id}>
								<AlbumCard album={album} />
								<PhotosList />
							</React.Fragment>
						)
				})}
			{!albumId &&
				userId &&
				userAlbums.map((album) => {
					if (album.userId === +userId)
						return (
							<React.Fragment key={album.id}>
								<AlbumCard album={album} />
							</React.Fragment>
						)
				})}
			{userId && !userAlbums.length && <Typography>Альбомов нет</Typography>}
		</List>
	)
}
export default AlbumsList
