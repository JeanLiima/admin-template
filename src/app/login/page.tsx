import { Metadata } from "next";

import { Overlay } from "./components/overlay";

import styles from "./styles.module.scss";

export const metadata: Metadata = {
	title: "Login - Admin template",
	openGraph: {
		title: "Login - Admin template",
	},
};

const Login: React.FC = () => (
	<main className={styles.main}>
		<Overlay/>
	</main>
);

export default Login;
