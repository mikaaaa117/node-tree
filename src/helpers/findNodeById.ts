import { NodeInterface } from "../mockData";

export const findNodeById = (
	tree: NodeInterface[],
	id: number | null
): NodeInterface | undefined => {
	if (!id) return;

	for (let i = 0; i < tree.length; i++) {
		const node = tree[i];
		if (node.id === id) {
			return node;
		} else if (node.children) {
			const foundNode = findNodeById(node.children, id);
			if (foundNode) return foundNode;
		}
	}

	return undefined;
};
