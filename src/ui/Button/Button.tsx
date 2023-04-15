import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
	type?: "submit" | "button" | "reset";
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
	type = "button",
	children,
	onClick
}) => {
	return (
		<button onClick={onClick} className={styles.button} type={type}>
			{children}
		</button>
	);
};
