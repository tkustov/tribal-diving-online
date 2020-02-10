import React, { memo, forwardRef } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { WFPButton } from '../common/wfp-button.component';

import styles from './buy-course.module.scss';

export const BuyCourse = memo(forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(styles.container, props.className)}
      ref={ref}>
      <div className={styles.buySection}>
        <div className={styles.price}>$100</div>
        <WFPButton
          invoiceUri={t('course1.buy.invoiceUri')}>
          {t('course1.buy.buyBtnTitle')}
        </WFPButton>
        <div
          className={styles.disclaimer}
          dangerouslySetInnerHTML={{
            __html: t('course1.buy.disclaimer', { termsOfUseUrl: '#/terms-of-use' })
          }} />
      </div>
    </div>
  );
}));
