import { NodeInterface } from "mockData";
import { findNodeById } from "./findNodeById";

export const editNode = (
	tree: NodeInterface[],
	id: number | null,
	value: string
) => {
	const treeCopy = tree;
	const node = findNodeById(treeCopy, id);
	if (node) {
		node.value = value;
	}
	return treeCopy;
};
