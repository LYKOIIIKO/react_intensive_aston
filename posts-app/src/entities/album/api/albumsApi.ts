import { api } from "../../../app/providers/store/services/api"
import type { Album } from "../../../shared/types/Album"
import type { Photo } from "../../../shared/types/Photo"

const albumsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAlbums: build.query<Album[], void>({
			query: () => "albums",
		}),
		getAlbumsByUser: build.query<Album[], number>({
			query: (id) => `albums?userId=${id}`,
		}),
		getPhotosByAlbumId: build.query<Photo[], number>({
			query: (id) => `albums/${id}/photos`,
		}),
	}),
})

export const { useGetAlbumsQuery, useGetAlbumsByUserQuery, useGetPhotosByAlbumIdQuery } = albumsApi
