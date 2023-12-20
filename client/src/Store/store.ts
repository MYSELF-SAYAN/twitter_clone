import { configureStore } from '@reduxjs/toolkit'
// ...
import dataReducer from "./Slices/DataSlice"
import postReducer from "./Slices/PostSlice"
const store = configureStore({
    reducer: {
        // add your reducers here
        data: dataReducer,
        post: postReducer,
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;
