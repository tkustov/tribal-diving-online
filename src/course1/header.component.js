import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { SvgInline } from '../common/svg-inline.component';

import styles from './header.module.scss';

export const Header = memo((props) => {
  return (
    <nav className={cn(styles.nav, props.className)}>
      <SvgInline className={styles.logo} src="/assets/tdo-logo.svg"/>
    </nav>
  );
});
