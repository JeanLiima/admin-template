import { Button } from "../button";
import { Input } from "../input";
import { Social } from "../social";

import styles from "./styles.module.scss";

const SignInForm = () => {
	return (
		<form 
			className={styles["sign-in-form"]}
		>
			<h1>Entrar</h1>
			<Social />
			<span>ou use sua conta</span>
			<Input type="email" placeholder="E-mail" />
			<Input type="password" placeholder="Senha" />
			<a href="#">Esqueceu a senha?</a>
			<Button label="Entrar" />
		</form>
	);
};

export { SignInForm };