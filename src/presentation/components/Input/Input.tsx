/* eslint-disable @typescript-eslint/indent */
import React, { useContext } from "react";

import Context from '@/presentation/contexts/form/form-context'

import Styles from "./styles.scss";
type PropsInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<PropsInput> = (props: PropsInput) => {
  const { errorState } = useContext(Context);
  const error = errorState[props.name]
  function enableInput (event: React.FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false;
  }
  function getStatus (): string {
    return 'ok'
  }
  function getTitle (): string {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input readOnly {...props} onFocus={enableInput} />
       <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  );
};

export default Input;
