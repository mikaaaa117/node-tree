import { FC, PropsWithChildren } from "react";
import styles from "./Modal.module.css";

interface ModalProps extends PropsWithChildren {
	isVisible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ isVisible, setVisible, children }) => {
	return isVisible ? (
		<div className={styles.background} onClick={() => setVisible(false)}>
			<div onClick={e => e.stopPropagation()} className={styles.modal}>
				{children}
			</div>
		</div>
	) : (
		<></>
	);
};
