enum BUTTON_TYPES {
	DEFAULT = "default",
	OUTLINE = "outline"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string,
	styleType: BUTTON_TYPES
}

export { type ButtonProps, BUTTON_TYPES };