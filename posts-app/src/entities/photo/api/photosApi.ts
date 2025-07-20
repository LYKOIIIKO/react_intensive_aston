import { api } from "../../../app/providers/store/services/api"
import type { Photo } from "../../../shared/types/Photo"

const photosApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPhotos: build.query<Photo[], void>({
			query: () => "photos",
		}),
		getPhotoById: build.query<Photo, number>({
			query: (id) => `photos/${id}`,
		}),
	}),
})

export const { useGetPhotosQuery, useGetPhotoByIdQuery } = photosApi
