import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { LangSelector } from './lang-selector.component';
import { SvgInline } from './svg-inline.component';

import styles from './header.module.scss';

export const Header = memo((props) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.container, props.className)}>
      <SvgInline
        className={styles.logo}
        src="/assets/tdo-logo.svg" />
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><NavLink to="/course1">{t('sitemap.course1')}</NavLink></li>
          <li><NavLink to="/terms-of-use">{t('sitemap.termsOfUse')}</NavLink></li>
        </ul>
      </nav>
      <LangSelector className={styles.langSelector} />
    </div>
  );
});
