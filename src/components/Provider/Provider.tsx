import { addNode, deleteNodeById, editNode } from "helpers";
import { DATA, NodeInterface } from "../../mockData";
import React, { PropsWithChildren, useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }: PropsWithChildren) => {
	// JSON.parse(JSON.stringify(DATA)) needs to make deep copy of DATA.
	// Without this, nested nodes or children will be updated in the DATA constant.
	const [tree, setTree] = useState<NodeInterface[]>(
		JSON.parse(JSON.stringify(DATA))
	);

	const [selectedNode, setSelectedNode] = useState<number | null>(null);

	const [action, setAction] = useState<"add" | "edit">("add");
	const [isVisible, setVisible] = useState(false);

	const handleReset = () => {
		const data = JSON.parse(JSON.stringify(DATA));
		setTree([...data]);
		setSelectedNode(null);
	};

	const handleDelete = () => {
		const treeCopy = deleteNodeById(tree, selectedNode);
		if (treeCopy) {
			setTree([...treeCopy]);
			setSelectedNode(null);
		}
	};

	const handleSubmit = (
		value: string,
		setValue: React.Dispatch<React.SetStateAction<string>>
	) => {
		if (value.length === 0) return;
		if (action === "add") {
			const treeCopy = addNode(tree, selectedNode, value);
			setTree([...treeCopy]);
		} else if (action === "edit") {
			const treeCopy = editNode(tree, selectedNode, value);
			setTree([...treeCopy]);
		}
		setValue("");
		setVisible(false);
	};

	return (
		<Context.Provider
			value={{
				tree,
				selectedNode,
				handleReset,
				handleDelete,
				handleSubmit,
				isVisible,
				setVisible,
				action,
				setAction,
				setSelectedNode
			}}
		>
			{children}
		</Context.Provider>
	);
};
