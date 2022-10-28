import { Reducer } from "@reduxjs/toolkit";
import { Todo, TodoPayload } from "./todoTypes";


enum TodoOperations {
	ADD,
	TOGGLED
}

type TodoAction = {
	type: TodoOperations,
	payload: TodoPayload | number
};

let ID_COUNTER = 0;

/* Action creators */
const addTodo = (text: string) => ({
	type: TodoOperations.ADD,
	payload: { text, id: ++ID_COUNTER }
});

const todoToggled = (id: number) => ({
	type: TodoOperations.TOGGLED,
	payload: id
});

/* Reducers */
const todosReducer: Reducer<Array<Todo>, TodoAction> = (
	state: Array<Todo> | undefined, action: TodoAction
) => {
	if (!state) {
		return [];
	}
	switch (action.type) {
		case TodoOperations.ADD: {
			const payload = action.payload as TodoPayload

			// !! Immutable updates required
			return state.concat({
				id: payload.id,
				text: payload.text,
				completed: false
			});
		}
		case TodoOperations.TOGGLED: {
			const id = action.payload as number

			// !! Immutable updates required
			return state.map(todo => {
				if (todo.id !== id) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed
				}
			});
		}
		default:
			return state;
	}
}

export {
	addTodo,
	todoToggled,
	todosReducer
};