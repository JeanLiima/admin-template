import Link from "next/link";

import { Icon } from "components/icon";

import styles from "./styles.module.scss";

const Social = () => {
	return (
		<div className={styles["social-container"]}>
			<Link href="#">
				<Icon name="facebook-f" />
			</Link>
			<Link href="#">
				<Icon name="google-plus-g" />
			</Link>
			<Link href="#">
				<Icon name="linkedin-in" />
			</Link>
		</div>
	);
};

export { Social };