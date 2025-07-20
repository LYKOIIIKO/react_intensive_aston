import { combineSlices } from "@reduxjs/toolkit"
import postSlice from "../../../../entities/post/model/slice/postSlice"
import userSlice from "../../../../entities/user/model/slice/userSlice"
import { api } from "../services/api"

export const rootReducer = combineSlices(api, userSlice, postSlice)

export type RootState = ReturnType<typeof rootReducer>
