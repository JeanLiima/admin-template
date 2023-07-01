import {
	findIconDefinition,
	IconDefinition,
	IconLookup,
	IconName, 
	library
} from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ICON_TYPES, IconProps } from "./types";

import styles from "./styles.module.scss";

library.add(fas, far, fab);

const Icon = ({ name, type }: IconProps) => {
	const iconLookup: IconLookup = { prefix: type, iconName: name as IconName };
	const iconDefinition: IconDefinition = findIconDefinition(iconLookup);

	return (
		<FontAwesomeIcon 
			icon={iconDefinition}
			className={styles["default-icon"]}
		/>
	);
};

Icon.defaultProps = {
	type: ICON_TYPES.SOLID
};

export { Icon };