import React, { memo, useCallback } from 'react';
import cn from 'classnames';

import styles from './wfp-button.module.scss';

export const WFPButton = memo((props) => {
  const handleClick = useCallback(() => {
    const wayforpay = new window.Wayforpay();
    wayforpay.invoice(props.invoiceUri);
  }, [props.invoiceUri]);

  return (
    <button
      className={cn(styles.button, props.className)}
      onClick={handleClick}>
      {props.children}
    </button>
  );
});
