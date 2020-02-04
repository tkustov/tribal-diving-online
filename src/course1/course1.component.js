import React, { memo, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../common/footer.component';
import { Header } from './header.component';
import { Details } from './details.component';
import { SocialInfo } from './social-info.component';
import { BuyCourse } from './buy-course.component';

import styles from './course1.module.scss';

export const Course1 = memo(() => {
  const { section } = useParams();
  const detailsRef = useRef(null);
  const socialInfoRef = useRef(null);
  const buyCourseRef = useRef(null);

  useEffect(() => {
    switch (section) {
      case 'details':
        detailsRef.current.scrollIntoView();
        break;
      case 'contacts':
        socialInfoRef.current.scrollIntoView();
        break;
      case 'buy':
        buyCourseRef.current.scrollIntoView();
        break;
    }
  }, [section]);

  return (
    <article className={styles.article}>
      <Header className={styles.header} />
      <Details
        ref={detailsRef}
        className={styles.details} />
      <SocialInfo
        ref={socialInfoRef}
        className={styles.socialInfo} />
      <BuyCourse
        ref={buyCourseRef}
        className={styles.buyCourse} />
      <Footer className={styles.footer} />
    </article>
  );
});
