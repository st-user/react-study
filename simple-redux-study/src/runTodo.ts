import { createStore } from "@reduxjs/toolkit";
import { 
	addTodo,
	todoToggled,
	todosReducer
} from "./todo";

export default function runTodo() {
	const store = createStore(todosReducer);
	
	store.subscribe(() => {
		console.log("=============================");
		for (const todo of store.getState()) {
			console.log(`${todo.id} - ${todo.text} - ${todo.completed}`);
		}
		console.log("=============================");
	});
	
	store.dispatch(addTodo("Task1"));
	store.dispatch(addTodo("Task2"));
	store.dispatch(addTodo("Task3"));
	store.dispatch(todoToggled(1));
	store.dispatch(todoToggled(1));
	store.dispatch(todoToggled(3));
}
