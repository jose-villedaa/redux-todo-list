import { createSlice } from "@reduxjs/toolkit";
import type { AddAssigneePayload, Assignee, AssigneesState, DeleteAssigneePayload } from "../../types";

const sliceName = 'assignees';

const genRandomUuid = () => {
    return crypto.randomUUID();
}

const initialAssignees: Assignee[] = [
    { id: genRandomUuid(), name: 'Jose Villeda' },
    { id: genRandomUuid(), name: 'Juanpa Morales' },
    { id: genRandomUuid(), name: 'Alan Lopez' },
]

const initialState: AssigneesState = {
    items: initialAssignees,
};

export const assigneeSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        addAssignee: (state, action: AddAssigneePayload) => {
            // add the new todo to the items array
            state.items.push(action.payload);
        },
        removeAssignee: (state, action: DeleteAssigneePayload) => {
            // filter out the todo with the given id
            state.items = state.items.filter(assignee => assignee.id !== action.payload.id);
        }
    },
})

export const { addAssignee, removeAssignee } = assigneeSlice.actions;

export default assigneeSlice.reducer;