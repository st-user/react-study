import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

import { selectTodos, todoAdded, todoToggled } from "./todoSlice";
import styles from "./Todo.module.css";

export function Todo() {
	const todos = useAppSelector(selectTodos);
	const dispatch = useDispatch();

	const [ todoText, setTodoText ] = useState("");

	let todoList;
	if (todos.length > 0) {
		todoList = todos.map(todo => {

			const completedClass = todo.completed ? styles.todoCompleted : "";
			
			return (
				<div key={todo.id} className={`${styles.row} ${completedClass}`}>
					<label>
						{todo.text}
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => {
								dispatch(todoToggled(todo.id));
							}}
						/>
					</label>
				</div>
			);
		});
	}

	return (
		<div>
			<h1 className={styles.row}>Todo</h1>
			<section className={styles.row}>
				<p>
					New Todo:
					<input
						type="text" value={todoText}
						onBlur={(e) => {
							const newTodoText = e.target.value;
							if (newTodoText) {
								dispatch(todoAdded({
									text: newTodoText
								}));
								setTodoText("");
							}
						}}
						onChange={(e) => {
							const newTodoText = e.target.value;
							setTodoText(newTodoText);
						}}
					/>
				</p>
			</section>
			{todoList}
		</div>
	);
}