import React from "react";
import { NodeInterface } from "mockData";

export interface ContextValue {
	tree: NodeInterface[];
	selectedNode: number | null;
	setSelectedNode: React.Dispatch<React.SetStateAction<number | null>>;
	handleReset: () => void;
	handleDelete: () => void;
	handleSubmit: (
		value: string,
		setValue: React.Dispatch<React.SetStateAction<string>>
	) => void;
	isVisible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	action: "add" | "edit";
	setAction: React.Dispatch<React.SetStateAction<"add" | "edit">>;
}

export const Context = React.createContext<ContextValue | null>(null);
