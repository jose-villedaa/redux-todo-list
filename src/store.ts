import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos/index.ts";
import assignees from "./reducers/assignees/index.ts";
import posts from "./reducers/posts/index.ts";
import { itemApi } from "./services/api.ts";

const store = configureStore({
    reducer: {
        todos,
        assignees,
        posts,
        [itemApi.reducerPath]: itemApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;