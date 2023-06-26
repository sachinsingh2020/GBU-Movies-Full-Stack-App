import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './reducers/movieReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: userReducer,
    }
})

export default store

// export const server = "https://gbu-movies-backend.vercel.app/api/v1"
export const server = "http://localhost:4000/api/v1"
