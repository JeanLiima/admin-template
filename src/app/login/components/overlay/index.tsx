"use client";

import React, { useState } from "react";

import { Button } from "../button";
import { BUTTON_TYPES } from "../button/types";
import { SignInForm } from "../sign-in-form";
import { SignUpForm } from "../sign-up-form";

import styles from "./styles.module.scss";

const Overlay = () => {
	const [containerStatus, setContainerStatus] = useState<"right" | "left">("left");
	const handleClickSingIn = () => {
		setContainerStatus("left");
	};

	const handleClickSingUp = () => {
		setContainerStatus("right");
	};

	return (
		<div 
			className={styles.container}
			data-status={containerStatus}
		>
			<div  className={styles["sign-up-container"]}>
				<SignUpForm />
			</div>
			<div className={styles["sign-in-container"]}>
				<SignInForm />
			</div>
			<div className={styles["overlay-container"]} >
				<div className={styles["overlay"]} >
					<div className={styles["overlay-left"]}>
						<h1>Bem vindo novamente!</h1>
						<p>Para se manter conectado conosco, faça o login com suas informações pessoais</p>
						<Button 
							styleType={BUTTON_TYPES.OUTLINE}
							label="Entrar"
							onClick={handleClickSingIn}
						/>
					</div>
					<div className={styles["overlay-right"]}	>
						<h1>Olá, Amigo!</h1>
						<p>Digite seus dados pessoais e comece a viajar conosco</p>
						<Button 
							styleType={BUTTON_TYPES.OUTLINE}
							onClick={handleClickSingUp}
							label="Cadastrar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Overlay };