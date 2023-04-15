import { NodeInterface } from "../mockData";

export const deleteNodeById = (
	tree: NodeInterface[],
	id: number | null
): NodeInterface[] | undefined => {
	if (!id) return;
	return tree.filter(node => {
		if (node.id === id) {
			return false;
		} else if (node.children) {
			node.children = deleteNodeById(node.children, id);
		}
		return true;
	});
};
