"use client";

import * as RadixSwitch from "@radix-ui/react-switch";

import { SwitchProps } from "./types";

import styles from "./styles.module.scss";

const Switch = ({
	id,
	label,
	children,
	onChange,
	value
}: SwitchProps) => {

	return (
		<div className={styles["default-switch"]} >
			<RadixSwitch.Root
				id={id}
				className={styles["default-switch__root"]}
				checked={value}
				onCheckedChange={onChange}
			>
				<RadixSwitch.Thumb
					className={styles["default-switch__root__thumb"]}
				/>
			</RadixSwitch.Root>
			{label && (
				<label 
					className={styles["default-switch__label"]} 
					htmlFor={id}
				>
					{label}
				</label>
			)}
			{children}
		</div>
	);
};

Switch.defaultProps = {
	id: "default-switch"
};

export { Switch };