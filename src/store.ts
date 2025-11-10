import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos/index.ts";

const store = configureStore({
    reducer: {
        todos,
    },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;