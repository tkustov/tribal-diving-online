import React, { memo, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { LangSelector } from './lang-selector.component';
import { Sitemap } from './sitemap.component';

import styles from './footer.module.scss';

export const Footer = memo(forwardRef((props, ref) => {
  const { t } = useTranslation();
  const dt = new Date();
  return (
    <footer ref={ref} className={cn(styles.footer, props.className)}>
      <div className={styles.companyData}>
        <div>
          {t('footer.companyName')}<br />
          {t('footer.companyId')}
        </div>
        <address>
          <a href="mailto:tribal.diving.online@gmail.com">tribal.diving.online@gmail.com</a><br />
          <a href="tel:+380934876382">+380934876382</a>
        </address>
      </div>
      <div className={styles.sitemap}>
        <h5>{t('footer.sitemapTitle')}</h5>
        <Sitemap />
      </div>
      <div className={styles.langs}>
        <LangSelector />
      </div>
      <div className={styles.copyright}>
        <span className="nowrap">
          2019&ndash;{dt.getFullYear()}
          {' '}&copy;{' '}
          {t('footer.companyName')}.
        </span>
        {' '}
        <span className="nowrap">
          {t('footer.allRightsReserved')}.
        </span>
      </div>
    </footer>
  );
}));
