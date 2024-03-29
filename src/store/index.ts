import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { filesApi } from "../services/files";
import { authApi } from "../services/auth";
import { usersApi } from "../services/users";
import { commentsApi } from "../services/comments";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [filesApi.reducerPath]: filesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      filesApi.middleware,
      authApi.middleware,
      usersApi.middleware,
      commentsApi.middleware
    ),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
