import { Metadata } from "next";
import { ReactElement } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";

import { BaseLayout } from "components/base-layout";

import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./styles.module.scss";

interface RootLayoutProps {
	children: ReactElement;
}

config.autoAddCss = false;
export const metadata: Metadata = {
	title: "Home - Admin template",
	description: "Admin Template",
	openGraph: {
		title: "Home - Admin template",
		description: "Admin Template",
	},
	generator: "Next.js",
	applicationName: "Next.js",
	referrer: "origin-when-cross-origin",
	keywords: ["Next.js", "React", "JavaScript"],
	authors: [{ name: "Josh", url: "https://jeanlima.dev.br" }],
	colorScheme: "dark",
	creator: "Jean Lima",
};

const RootLayout = ({
	children,
}: RootLayoutProps) => {
	return (
		<html lang="pt-BR">
			<body className={styles["body-container"]}>
				<BaseLayout>
					{children}
				</BaseLayout>
			</body>
		</html>
	);
};

export default RootLayout;
