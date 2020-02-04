import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { SvgInline } from './svg-inline.component';
import { LangSelector } from './lang-selector.component';

import styles from './footer.module.scss';

export const Footer = memo(() => {
  const { t } = useTranslation();
  const dt = new Date();
  return (
    <footer className={styles.footer}>
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
      <div className={styles.langs}>
        <LangSelector />
      </div>
      <div className={styles.logoSection}>
        <SvgInline className={styles.logo} src="/assets/tdo-logo.svg" />
      </div>
      <div className={styles.copyright}>
        2019&ndash;{dt.getFullYear()}&nbsp;&copy;&nbsp;{t('footer.companyName')}.
        {' '}
        {t('footer.allRightsReserved')}.
      </div>
    </footer>
  );
});
