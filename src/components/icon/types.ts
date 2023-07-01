import { IconName } from "@fortawesome/fontawesome-svg-core";

enum ICON_TYPES {
	SOLID = "fab",
	REGULAR = "far",
	BRAND = "fab"
}

interface IconProps {
	name: IconName,
	type: ICON_TYPES
}
export {  
	type IconProps,
	ICON_TYPES
};