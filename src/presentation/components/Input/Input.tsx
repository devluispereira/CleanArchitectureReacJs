/* eslint-disable @typescript-eslint/indent */
import React, { useContext } from "react";

import Context from '@/presentation/contexts/form/form-context'

import Styles from "./styles.scss";
type PropsInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<PropsInput> = (props: PropsInput) => {
  const { state, setState } = useContext(Context);
  const error = state[`${props.name}Error`]

  function handleChange (event: React.FocusEvent<HTMLInputElement>): void {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  function enableInput (event: React.FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false;
  }

  function getStatus (): string {
    return error ? 'ok' : 'X'
  }

  function getTitle (): string {
    return error || 'Tudo Certo'
  }

  return (
    <div className={Styles.inputWrap}>
      <input readOnly {...props} onFocus={enableInput} data-testid={props.name} onChange={handleChange } />
       <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  );
};

export default Input;
