import { BUTTON_TYPES, ButtonProps } from "./types";

import styles from "./styles.module.scss";

const Button = ({ 
	label, 
	styleType,
	...props
}: ButtonProps) => (
	<button
		data-type={styleType}
		{...props}
		className={styles.button}
	>
		{label}
	</button>
);

Button.defaultProps = {
	styleType: BUTTON_TYPES.DEFAULT
};

export { Button };