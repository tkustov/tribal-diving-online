import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './sitemap.module.scss';

export const Sitemap = memo((props) => {
  return (
    <nav className={cn(styles.sitemap, props.className)}>
      <menu>
        <li><NavLink to="/course1">Course 1</NavLink></li>
        <li><NavLink to="/course1/details">Details</NavLink></li>
        <li><NavLink to="/course1/contacts">Contacts</NavLink></li>
        <li><NavLink to="/course1/buy">Buy</NavLink></li>
      </menu>
    </nav>
  );
});
