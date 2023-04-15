import { NodeInterface } from "../mockData";
import { findNodeById } from "./findNodeById";
import { generateNode } from "./generateNode";

export const addNode = (
	tree: NodeInterface[],
	id: number | null,
	value: string
) => {
	if (!id) return [...tree, generateNode(value)];

	let treeCopy = tree;
	let node = findNodeById(treeCopy, id);

	if (node?.children) {
		node.children = [...node.children, generateNode(value)];
	}

	return treeCopy;
};
