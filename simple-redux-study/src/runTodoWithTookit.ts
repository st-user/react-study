import { configureStore } from "@reduxjs/toolkit";
import { Todo } from "./todoTypes";
import todosReducer from "./todoWithToolkit";
import { todoAdded, todoToggled } from "./todoWithToolkit";

let ID_COUNTER = 0;

export default function runTodoWithToolkit() {
	const store = configureStore({
		reducer: {
			todos: todosReducer
		}
	});
	
	store.subscribe(() => {
		console.log("=============================");
		for (const todo of store.getState().todos) {
			const _todo = todo as Todo;
			console.log(`${_todo.id} - ${_todo.text} - ${_todo.completed}`);
		}
		console.log("=============================");
	});
	
	store.dispatch(todoAdded({ text: "Task1", id: ++ID_COUNTER }));
	store.dispatch(todoAdded({ text: "Task2", id: ++ID_COUNTER }));
	store.dispatch(todoAdded({ text: "Task3", id: ++ID_COUNTER }));

	store.dispatch(todoToggled(1));
	store.dispatch(todoToggled(1));
	store.dispatch(todoToggled(3));
}