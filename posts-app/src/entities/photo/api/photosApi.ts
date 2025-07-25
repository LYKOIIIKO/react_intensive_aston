import { api } from "@app/providers/store/services/api"
import type { Photo } from "../model/types"

const photosApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPhotos: build.query<Photo[], void>({
			query: () => "photos",
			providesTags: ["Albums"],
		}),
		getPhotoById: build.query<Photo, number>({
			query: (id) => `photos/${id}`,
			providesTags: ["Albums"],
		}),
	}),
})

export const { useGetPhotosQuery, useGetPhotoByIdQuery } = photosApi
