export const Seed = [
	{
		id: 1,
		name: 'Todo',
		active: true,
		tasks: [
			{
				id: 1,
				title: 'Learn Node',
				edit: false
			},
			{
				id: 2,
				title: 'Learn Loopback',
				edit: false
			}
		]
	},
	{
		id: 2,
		name: 'InProgress',
		active: false,
		tasks: [
			{
				id: 1,
				title: 'Learn MongoDB',
				edit: false
			},
			{
				id: 2,
				title: 'Learn English',
				edit: false
			}
		]
	},
	{
		id: 3,
		name: 'Done',
		active: false,
		tasks: [
			{
				id: 1,
				title: 'Learn GraphQL',
				edit: false
			}
		]
	}
];
