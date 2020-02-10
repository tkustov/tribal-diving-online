import React, { memo, forwardRef } from 'react';
import cn from 'classnames';

import styles from './social-info.module.scss';

export const SocialInfo = memo(forwardRef((props, ref) => {
  return (
    <div
      className={cn(styles.container, props.className)}
      ref={ref}>
      <ul className={styles.contactsList}>
        <li className="fb"><a href="https://fb.com/tribal.diving.online">fb.com/tribal.diving.online</a></li>
        <li className="insta"><a href="https://www.instagram.com/tribal.diving.online/">@tribal.diving.online</a></li>
        <li className="gmail"><a href="mailto:tribal.diving.online@gmail.com">tribal.diving.online@gmail.com</a></li>
      </ul>
    </div>
  );
}));
