import { InputProps } from "./types";

import styles from "./styles.module.scss";

const Input = ({...props}: InputProps) => {
	return (
		<input
			className={styles.input}
			{...props}
		/>
	);
};

export { Input };