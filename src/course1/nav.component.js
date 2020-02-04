import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgInline } from '../common/svg-inline.component';

import styles from './nav.module.css';

export function Nav () {
  return (
    <nav>
      <SvgInline className={styles.logo} src="/assets/tdo-logo.svg"/>
    </nav>
  );
}
