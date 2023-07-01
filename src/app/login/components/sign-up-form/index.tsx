import { Button } from "../button";
import { Input } from "../input";
import { Social } from "../social";

import styles from "./styles.module.scss";

const SignUpForm = () => {
	return (
		<form 
			className={styles["sign-up-form"]}
		>
			<h1>Criar uma conta</h1>
			<Social />
			<span>ou use seu e-mail para se registrar</span>
			<Input type="text" placeholder="Nome" />
			<Input type="email" placeholder="E-mail" />
			<Input type="password" placeholder="Senha" />
			<Button label="Cadastrar" />
		</form>
	);
};

export { SignUpForm };