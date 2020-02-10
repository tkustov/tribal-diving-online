import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../common/header.component';
import { Footer } from '../common/footer.component';
import { SvgInline } from '../common/svg-inline.component';

import styles from './terms-of-use.module.scss';

export const TermsOfUse = memo(() => {
  const { t } = useTranslation();

  const sectionsData = t('termsOfUse.sections', {
    returnObjects: true
  });
  const renderedSections = sectionsData.map(renderSection);

  return (
    <div className={styles.wrapper}>
      <Header />
      <article className={styles.container}>
        <header>
          <h1 className={styles.pageTitle}>
            {t('termsOfUse.pageTitle')}
          </h1>
        </header>
        {renderedSections}
      </article>
      <Footer />
    </div>
  );
});

function renderSection (section) {
  return (
    <section className={styles.section} key={section.title}>
      <h2 className={styles.sectionTitle}>
        {section.title}
      </h2>
      {section.items.map(item => (
        <div
          key={item}
          className={styles.sectionItem}
          dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </section>
  );
}
