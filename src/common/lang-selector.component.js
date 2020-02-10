import React, { Fragment, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cn from "classnames";

import { locales } from '../locales';

import styles from './lang-selector.module.scss';

export const LangSelector = memo((props) => {
  const { t, i18n } = useTranslation();

  const handleChange = useCallback((event) => {
    i18n.changeLanguage(event.target.value);
  }, [i18n]);

  const radios = locales.map((loc, i) => renderRadio({
    id: `lng-${loc.key}`,
    name: 'lang-selector',
    value: loc.key,
    title: t(loc.titleKey),
    checked: i18n.language === loc.key,
    onChange: handleChange
  }));

  return (
    <form className={cn(styles.radioForm, props.className)}>
      {radios}
    </form>
  );
});

function renderRadio({ id, name, value, title, checked, onChange }) {
  return (
    <Fragment key={id}>
      <input
        type="radio"
        id={id}
        className={styles.radioInput}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange} />
      <label
        htmlFor={id}
        className={styles.radioLabel}>
        {title}
      </label>
    </Fragment>
  );
}
