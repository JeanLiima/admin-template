import { PropsWithChildren } from "react";

interface SwitchProps extends PropsWithChildren {
	id: string,
	label?: string,
	onChange: (status: boolean) => void,
	value: boolean,
}

export type { SwitchProps };