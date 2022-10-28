type TodoPayload = {
	text: string,
	id: number
};

type Todo = TodoPayload & { completed: boolean };

export {
	Todo,
	TodoPayload
}