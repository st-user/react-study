interface MyType {
	name: string
	value: number
}

function hello(input: MyType): string {
	return `${input.name} - ${input.value + 1}`;
}

console.log(hello({
	name: "Bob",
	value: 10
}));