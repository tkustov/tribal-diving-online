import React, { memo, forwardRef } from 'react';
import cn from 'classnames';

import styles from './social-info.module.scss';

export const SocialInfo = memo(forwardRef((props, ref) => {
  return (
    <div
      className={cn(styles.container, props.className)}
      ref={ref}>
      Social Info
    </div>
  );
}));
