import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './headline.module.scss';

export const Headline = memo((props) => {
  const { t } = useTranslation();
  
  return (
    <div className={cn(styles.container, props.className)}>
      <div className={styles.productName}>
        {t('course1.headline.productName')}
      </div>
      <Link to="/course1/buy" className={styles.buyBtn}>
        {t('course1.headline.buyBtnTitle')}
      </Link>
    </div>
  );
});
