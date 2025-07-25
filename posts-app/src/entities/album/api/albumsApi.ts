import { api } from "@app/providers/store/services/api"
import type { Photo } from "@entities/photo/model/types"
import type { Album } from "../model/types"

const albumsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAlbums: build.query<Album[], void>({
			query: () => "albums",
			providesTags: ["Albums"],
		}),
		getAlbumsByUser: build.query<Album[], number>({
			query: (id) => `albums?userId=${id}`,
			providesTags: ["Albums"],
		}),
		getPhotosByAlbumId: build.query<Photo[], number>({
			query: (id) => `albums/${id}/photos`,
			providesTags: ["Albums"],
		}),
	}),
})

export const { useGetAlbumsQuery, useGetAlbumsByUserQuery, useGetPhotosByAlbumIdQuery } = albumsApi
