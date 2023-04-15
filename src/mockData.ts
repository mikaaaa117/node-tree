export interface NodeInterface {
	id: number;
	value: string;
	children?: NodeInterface[];
}

export const DATA: NodeInterface[] = [
	{
		id: 1,
		value: "Node 1",
		children: [
			{
				id: 2,
				value: "Node 2",
				children: [
					{
						id: 3,
						value: "Node 3",
						children: []
					},
					{
						id: 4,
						value: "Node 4",
						children: []
					}
				]
			},
			{
				id: 5,
				value: "Node 5",
				children: []
			}
		]
	}
];
