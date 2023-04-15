import { FC } from "react";
import { NodeInterface } from "../../mockData";
import styles from "./Node.module.css";

interface NodeProps {
	node: NodeInterface;
	selectedNode?: number | null;
	setSelectedNode: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Node: FC<NodeProps> = ({
	node,
	selectedNode,
	setSelectedNode
}) => {
	const handleSelect = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		console.log("click", node.id);
		event.stopPropagation();
		setSelectedNode(prev => (prev !== node.id ? node.id : 0));
	};

	return (
		<div
			onClick={event => handleSelect(event)}
			className={`${selectedNode === node.id ? styles.active : ""} ${
				styles.node
			}`}
		>
			<h1>{node.value}</h1>
			{node.children && (
				<div className={styles.nodeChildren}>
					{node.children.map(node => (
						<Node
							node={node}
							selectedNode={selectedNode}
							setSelectedNode={setSelectedNode}
							key={node.id}
						></Node>
					))}
				</div>
			)}
		</div>
	);
};
