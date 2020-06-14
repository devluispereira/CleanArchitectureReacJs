import React from "react";

import styles from "./styles.scss";

type Props = React.HTMLAttributes<HTMLElement>;

const Spiner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} className={[styles.spiner, props.className].join(" ")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spiner;
