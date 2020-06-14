import React, { useContext } from "react";
import Spinner from "../spiner/spiner";

import Styles from "./styles.scss";
import ContextForm from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { loading, errorMessage } = useContext(ContextForm)
  return (
    <div data-testid='errorWrap' className={Styles.errorWrap}>
      {
        loading && <Spinner className={Styles.spinner} />
      }
      {errorMessage && <span className={Styles.error}>Error</span>}
    </div>
  );
};

export default FormStatus;
