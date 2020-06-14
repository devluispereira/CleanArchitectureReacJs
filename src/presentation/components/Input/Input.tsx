/* eslint-disable @typescript-eslint/indent */
import React from "react";

import Styles from "./styles.scss";
type PropsInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<PropsInput> = (props: PropsInput) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span className={Styles.status}>ok</span>
    </div>
  );
};

export default Input;
