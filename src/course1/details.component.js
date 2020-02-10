import React, { memo, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './details.module.scss';

export const Details = memo(forwardRef((props, ref) => {
  const { t } = useTranslation();

  const warmupItems = t('course1.details.warmupItems', { returnObjects: true });
  const warmapList = warmupItems.map(item => (
    <li key={item}>{item}</li>
  ));

  const danceItems = t('course1.details.danceItems', { returnObjects: true });
  const danceList = danceItems.map(item => (
  <li key={item}>{item}</li>
  ));

  return (
    <div
      className={cn(styles.container, props.className)}
      ref={ref}>
      <h3 className={styles.sectionTitle}>
        {t('course1.details.pageTitle')}
      </h3>
      <div>
        <h4>{t('course1.details.warmupTitle')}:</h4>
        <ul>{warmapList}</ul>
      </div>
      <div>
        <h4>{t('course1.details.danceTitle')}:</h4>
        <ul>{danceList}</ul>
      </div>
    </div>
  );
}));
