"use client";

import { useEffect } from "react";
import { TextField } from "adapt-it-library";

import { Footer } from "components/footer";

import styles from "./styles.module.scss";

const Home: React.FC = () => {
	useEffect(() => { document.body.classList.add(styles["body-container"]); }, []);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div />
				<TextField label="teste"></TextField>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
