"use client";

import { redirect } from "next/navigation";
import { Navbar } from "adapt-it-library";

import styles from "./styles.module.scss";

const Home: React.FC = () => {
	const handleOnClick = () => {
		console.log("clicado");
	};

	const navOptions = [
		{
			label: "Home",
			onClick: () => redirect("/tasks"),
		},
		{
			label: "Products",
			categories: [
				{
					name: "Digital",
					items: [
						{
							label: "Televisions"
						},
						{
							label: "Cellphones",
							onClick: handleOnClick,
						},
						{
							label: "Home theaters",
							onClick: handleOnClick,
						}
					]
				},
				{
					name: "Moveis",
					items: [
						{
							label: "Shoves"
						},
						{
							label: "Sofas",
							onClick: handleOnClick,
						}
					]
				},
			]
		},
		{
			label: "Services",
			categories: [
				{
					items: [
						{
							label: "Televisions"
						},
						{
							label: "Cellphones",
							onClick: handleOnClick,
						},
						{
							label: "Home theaters",
							onClick: handleOnClick,
						}
					]
				},
			]
		}
	];

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div />
				<Navbar options={navOptions} />
			</main>
		</div>
	);
};

export default Home;
