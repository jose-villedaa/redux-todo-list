import { configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos/index.ts";
import assignees from "./reducers/assignees/index.ts";

const store = configureStore({
    reducer: {
        todos,
        assignees
    },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;