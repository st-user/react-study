import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoPayload } from "./todoTypes";



const todosSilice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		todoAdded(state: Array<Todo>, action: PayloadAction<TodoPayload | number>) {
			const payload = action.payload as TodoPayload;
			state.push({
				id: payload.id,
				text: payload.text,
				completed: false
			});
		},
		todoToggled(state: Array<Todo>, action: PayloadAction<TodoPayload | number>) {
			const id = action.payload as number;
			const todo = state.find(todo => todo.id === id);
			if (todo) {
				todo.completed = !todo.completed;
			}
		}
	}
});

export const { todoAdded, todoToggled } = todosSilice.actions;
export default todosSilice.reducer;