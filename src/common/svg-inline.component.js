import React, { memo, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './svg-inline.module.css';

const initialSvgContent = { __html: '' };

export const SvgInline = memo((props) => {
  const [svgContent, setSvgContent] = useState(initialSvgContent);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', props.src, true);
    xhr.addEventListener('load', () => {
      setSvgContent({ __html: xhr.responseText });
    });
    xhr.send();
    return () => {
      if (xhr.readyState === 3) {
        xhr.abort();
      }
    }
  }, [props.src]);

  return (
    <div
      className={cn(styles.svgInline, props.className)}
      dangerouslySetInnerHTML={svgContent} />
  );
});
