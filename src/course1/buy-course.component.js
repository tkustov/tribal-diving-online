import React, { memo, forwardRef } from 'react';
import cn from 'classnames';

export const BuyCourse = memo(forwardRef((props, ref) => {
  return (
    <div
      className={cn(props.className)}
      ref={ref}>
      Buy Course
    </div>
  );
}));
