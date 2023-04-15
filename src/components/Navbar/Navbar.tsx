import { useNodes } from "helpers";
import { Button } from "ui";
import styles from "./Navbar.module.css";

export const Navbar = () => {
	const { handleReset, handleDelete, setAction, setVisible } = useNodes();

	const handleAddModal = () => {
		setAction("add");
		setVisible(true);
	};

	const handleEditModal = () => {
		setAction("edit");
		setVisible(true);
	};
	return (
		<nav className={styles.navbar}>
			<Button onClick={handleAddModal}>Add</Button>
			<Button onClick={handleDelete}>Remove</Button>
			<Button onClick={handleEditModal}>Edit</Button>
			<Button onClick={handleReset}>Reset</Button>
		</nav>
	);
};
