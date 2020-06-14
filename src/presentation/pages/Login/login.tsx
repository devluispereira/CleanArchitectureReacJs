import React, { useState, useEffect } from "react";
import Styles from "./login-styles.scss";

import { LoginHeader, Footer, FormStatus, Input } from "../../components";
import ContextForm from '@/presentation/contexts/form/form-context'
import { Validation } from "@/presentation/protocols/validation";

type LoginProps={
  validation: Validation
}

// eslint-disable-next-line react/prop-types
const Login: React.FC<LoginProps> = ({ validation }) => {
  const [state, setState] = useState({
    loading: false,
    email: "",
    password: '',
    emailError: 'Campo Obrigatório',
    passwordError: 'Campo Obrigatório',
    errorMessage: ''

  })

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    validation.validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    validation.validate({ password: state.password })
  }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <ContextForm.Provider value={{ state, setState }}>

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
