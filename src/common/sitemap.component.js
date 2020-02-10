import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './sitemap.module.scss';

export const Sitemap = memo((props) => {
  const { t } = useTranslation();
  return (
    <nav className={cn(styles.sitemap, props.className)}>
      <menu className={styles.menu}>
        <li>
          <NavLink to="/course1">{t('sitemap.course1')}</NavLink>
          <menu className={styles.submenu}>
            <li><NavLink to="/course1/details">{t('sitemap.details')}</NavLink></li>
            <li><NavLink to="/course1/contacts">{t('sitemap.contacts')}</NavLink></li>
            <li><NavLink to="/course1/buy">{t('sitemap.buy')}</NavLink></li>
          </menu>
        </li>
        <li><NavLink to="/terms-of-use">{t('sitemap.termsOfUse')}</NavLink></li>
      </menu>
    </nav>
  );
});
