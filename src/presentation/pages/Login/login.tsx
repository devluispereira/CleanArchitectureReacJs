import React, { useState } from "react";
import Styles from "./login-styles.scss";

import { LoginHeader, Footer, FormStatus, Input } from "../../components";
import ContextForm from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    loading: false

  })
  const [errorState] = useState({
    email: 'Campo Obrigatório',
    password: 'Campo Obrigatório',
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <ContextForm.Provider value={{ state, errorState }}>

        <form className={Styles.form} action="">
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="digite seu email" />
          <Input type="password" name="password" placeholder="digite sua senha" />
          <button data-testid='submit' disabled className={Styles.submit} type="submit">
          Entrar
          </button>
          <span className={Styles.link}>criar conta</span>
          <FormStatus />
        </form>
      </ContextForm.Provider>

      <Footer />
    </div>
  );
};

export default Login;
