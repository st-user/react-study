import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TodoBody {
	text: string
}

interface Todo extends TodoBody {
	id: number,
	completed: boolean
}

let TODO_ID_COUNTER = 0;

const todoSlice = createSlice({
	name: "todos",
	initialState: [{
		id: ++TODO_ID_COUNTER,
		text: "Sample TODO",
		completed: false
	}] as Array<Todo>,
	reducers: {
		todoAdded(state: Array<Todo>, action: PayloadAction<TodoBody | number>) {
			const todoBody = action.payload as TodoBody;
			state.push({
				id: ++TODO_ID_COUNTER,
				text: todoBody.text,
				completed: false
			});
		},
		todoToggled(state: Array<Todo>, action: PayloadAction<TodoBody | number>) {
			const todoId = action.payload as number;
			const todo = state.find(todo => todo.id === todoId);
			if (todo) {
				todo.completed = !todo.completed;
			}
		}
	}
});

export const { todoAdded, todoToggled } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;