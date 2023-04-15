import "./App.css";

import { useState } from "react";
import { Button, Modal } from "ui";
import { useNodes } from "helpers";
import { Navbar, Node } from "components";

export const App = () => {
	const [value, setValue] = useState("");

	const {
		setVisible,
		selectedNode,
		setSelectedNode,
		tree,
		isVisible,
		handleSubmit,
		action
	} = useNodes();

	return (
		<div className="container">
			<Navbar />
			{tree.map(node => (
				<Node
					node={node}
					selectedNode={selectedNode}
					setSelectedNode={setSelectedNode}
					key={node.id}
				/>
			))}
			<Modal isVisible={isVisible} setVisible={setVisible}>
				<h2>Enter name of node</h2>
				<div className="modal-body">
					<input
						value={value}
						onChange={e => setValue(e.target.value)}
						onKeyDown={e =>
							e.key === "Enter" ? handleSubmit(value, setValue) : null
						}
					/>
					<Button onClick={() => handleSubmit(value, setValue)}>
						{action}
					</Button>
				</div>
			</Modal>
		</div>
	);
};
